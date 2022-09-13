import React, { useState, useCallback, useEffect } from "react";
import BarChartContainerSC from "./StyledComponents";
import { ResponsiveBar } from "@nivo/bar";
import createDataArray from "./functions/createDataArray";

import { EntityITC } from "../PMBarChart/PMBarChart";

const CO2BarChart = ({ co2 }: { co2: EntityITC }) => {
  const [data, setData] = useState(null);

  const createDataArrayMemoized = useCallback(
    (co2: EntityITC) => createDataArray(co2),
    []
  );

  useEffect(() => {
    let dataArray = createDataArrayMemoized(co2);
    //console.log("dataArray Co2", dataArray);
    setData(dataArray);
  }, [co2, createDataArrayMemoized]);

  return (
    <>
      {data && co2.state !== undefined && (
        <BarChartContainerSC>
          <ResponsiveBar
            data={data}
            theme={{
              fontSize: 12,
            }}
            keys={["unbedenklich", "unangenehm", "kritisch"]}
            indexBy="messwert"
            margin={{ top: 10, right: 45, bottom: 70, left: 45 }}
            padding={0.7}
            layout="horizontal"
            valueScale={{ type: "linear" }}
            colors={["#9fff7a", "#fff37a", "#ff7a7a"]}
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
              legend: "[ppm]",
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
                translateX: -15,
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
            ariaLabel="Kohlenstoffdioxid Bar Chart"
            animate={false}
          />
        </BarChartContainerSC>
      )}
    </>
  );
};

export default CO2BarChart;
