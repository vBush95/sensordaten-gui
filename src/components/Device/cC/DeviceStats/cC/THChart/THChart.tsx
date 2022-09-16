import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import {
  THChartSC,
  MesswerteContainerSC,
  ValueSC,
  DescriptionSC,
  BehaglichkeitSC,
  SeperatorSC,
  ChartDimensionsSC,
} from "./StyledComponents";
import calculateChartBoundaries from "./functions/calculateChartBoundaries";
import SymbolCircle from "./cC/SymbolCircle";
import TemperatureHumidityCircleLegend from "./cC/TemperatureHumidityCircleLegend";
import Points from "./cC/Points";
import CustomTooltip from "./cC/CustomTooltip/CustomTooltip";
import createPolygonObject from "./functions/createPolygonObject";

import thresholdsForMeasurements from "../../../../../../utils/thresholdsForMeasurements";

import { ChartBoundaries } from "./functions/calculateChartBoundaries";
import checkBehaglichkeit from "./functions/checkForBehaglichkeit";

const { polygonBehaglich, polygonNochBehaglich } = thresholdsForMeasurements.ht;

export type EntityState = number | string | undefined;

export type Behaglichkeit = {
  text: string;
  color: string;
};

export type THChartProps = {
  temperature: EntityState;
  humidity: EntityState;
};

const THChart = ({ temperature, humidity }: THChartProps) => {
  const [boundaries, setBoundaries] = useState<ChartBoundaries | null>(null);
  const [behaglichkeit, setBehaglichkeit] =
    useState<Behaglichkeit | null>(null);

  useEffect(() => {
    if (typeof temperature === "number" && typeof humidity === "number") {
      setBoundaries(() => calculateChartBoundaries(temperature, humidity));
      setBehaglichkeit(() =>
        checkBehaglichkeit(
          [temperature, humidity],
          polygonBehaglich,
          polygonNochBehaglich
        )
      );
    }
  }, [humidity, temperature]);

  return (
    <>
      {boundaries && (
        <THChartSC>
          <ChartDimensionsSC>
            <ResponsiveLine
              theme={{
                fontSize: 12,
                fontFamily: "",
                axis: {
                  legend: {
                    text: {
                      fill: "#212529",
                      fontSize: 14,
                      fontWeight: "normal",
                    },
                  },
                },
              }}
              margin={{ top: 20, right: 120, bottom: 35, left: 40 }}
              pointLabelYOffset={0}
              xScale={{
                type: "linear",

                min: boundaries.lowerTemperature,
                max: boundaries.upperTemperature,
              }}
              yScale={{
                type: "linear",
                min: 0,
                max: 100,
              }}
              colors={["#a7c957", "#ffc857", "#ffbe0b"]}
              curve={"linear"}
              animate={false}
              enableArea={true}
              lineWidth={1}
              enablePoints={true}
              pointSize={4}
              pointColor={{ from: "color" }}
              pointBorderColor="#212529"
              pointBorderWidth={1}
              enableSlices={false}
              useMesh={true}
              debugMesh={false}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: true,
                  translateX: 105,
                  translateY: 5,
                  itemWidth: 95,
                  itemHeight: 20,
                  itemsSpacing: 0,
                  symbolSize: 4,
                  symbolShape: (props) =>
                    ["Messpunkt"].includes(`${props.id}`) ? (
                      <TemperatureHumidityCircleLegend {...props} />
                    ) : (
                      <SymbolCircle {...props} />
                    ),
                  itemDirection: "right-to-left",
                  itemTextColor: "#777",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              axisBottom={{
                tickSize: 0,
                legend: "[°C]",
                legendOffset: 25,
                tickValues: 5, // Anzahl der Striche
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 0,
                legend: "[%]",
                legendOffset: -30,
                tickValues: 5, // Anzahl der Striche
                legendPosition: "middle",
              }}
              data={[
                createPolygonObject(
                  thresholdsForMeasurements.ht.polygonBehaglich,
                  "behaglich"
                ),
                createPolygonObject(
                  thresholdsForMeasurements.ht.polygonNochBehaglich,
                  "noch behaglich"
                ),
                {
                  id: "Messpunkt",
                  data: [{ x: temperature, y: humidity }],
                },
              ]}
              layers={[
                "grid",
                "markers",
                "axes",
                "areas",
                "crosshair",
                "lines",
                Points,
                "slices",
                "mesh",
                "legends",
              ]}
              tooltip={CustomTooltip}
            />
          </ChartDimensionsSC>
          <MesswerteContainerSC>
            <DescriptionSC>Temperatur</DescriptionSC>
            <ValueSC>{temperature}°C</ValueSC>
            <DescriptionSC>Luftfeuchtigkeit</DescriptionSC>
            <ValueSC>{humidity}%</ValueSC>
            <BehaglichkeitSC color={behaglichkeit?.color}>
              {behaglichkeit?.text}
            </BehaglichkeitSC>
            <SeperatorSC />
          </MesswerteContainerSC>
        </THChartSC>
      )}
    </>
  );
};

export default THChart;
