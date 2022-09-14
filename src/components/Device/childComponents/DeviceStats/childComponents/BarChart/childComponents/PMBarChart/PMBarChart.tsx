import React, { useEffect, useState, useCallback } from "react";
import BarChartContainerSC from "./StyledComponents";
import { ResponsiveBar } from "@nivo/bar";
import { EntityInformation } from "../../../../../../../../utilFunctions/groupEntities/groupEntities";
import { TextAndColor } from "../../../../../../../../utilFunctions/checkForBehaglichkeit/checkForBehaglichkeit";

import createDataArray from "./functions/createDataArray";
import { BarObject } from "./functions/createDataArray";

export type EntityITC = EntityInformation & TextAndColor;

export type PMBProps = {
  pm10: EntityITC;
  pm25: EntityITC;
};

const PMBarChart = ({ pm10, pm25 }: PMBProps) => {
  const [data, setData] = useState<BarObject[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const createDataArrayMemoized = useCallback(
    (pm10: EntityITC, pm25: EntityITC) => createDataArray(pm10, pm25),
    []
  );

  useEffect(() => {
    let dataArray = createDataArrayMemoized(pm10, pm25);
    setData(dataArray);
    if (pm10.state !== undefined && pm25.state !== undefined) {
      setShow(pm10.state > 0 || pm25.state > 0 ? true : false);
    }
  }, [pm10, pm25, createDataArrayMemoized]);

  return (
    <>
      {data && show && (
        <BarChartContainerSC>
          <ResponsiveBar
            data={data}
            theme={{
              fontSize: 12,
            }}
            keys={["unbedenklich", "WHO 2021", "EU-Grenzwert"]}
            indexBy="messwert"
            margin={{ top: 10, right: 45, bottom: 70, left: 45 }}
            padding={0.5}
            layout="horizontal"
            valueScale={{ type: "linear" }}
            colors={["#9fff7a", "#fff37a", "#ff7a7a"]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderRadius={0}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend: "[µg/m3]",
              legendPosition: "middle",
              legendOffset: 25,
              tickValues: 5,
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              //legend: "food",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            enableLabel={true}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            enableGridX={true}
            enableGridY={false}
            //gridXValues={[5, 15, 25, 40]}
            legends={[
              {
                dataFrom: "keys",
                anchor: "top-left",
                direction: "row",
                justify: false,
                translateX: -35,
                translateY: 180,
                itemsSpacing: -10,
                itemWidth: 120,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 15,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Nivo bar chart"
            animate={false}
          />
        </BarChartContainerSC>
      )}
    </>
  );
};

export default PMBarChart;
