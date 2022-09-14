import React, { useRef, useState, useEffect, useCallback } from "react";
import { Line } from "@nivo/line";

import thresholdsForMeasurements, {
  Thresholds,
} from "../../../../../../utils/thresholdsForMeasurements";
import ChartContainer from "./StyledComponents";
import { GraphData } from "../../functions/dataToPoints";

export type GraphDimensions = {
  width: number;
  height: number;
};

export type IDGProps = {
  influxData: GraphData | null;
  type: string;
  showPointLabels: boolean;
  graphDimensions: GraphDimensions;
};

export type MeasurementsWithMarkers = {
  co2: number[];
  pm10: number[];
  pm25: number[];
};

const InfluxChart = ({
  influxData,
  type,
  showPointLabels,
  graphDimensions,
}: IDGProps) => {
  const [dimensions, setDimensions] =
    useState<GraphDimensions>(graphDimensions);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [markers, setMarkers] = useState<any>([]);

  const handleResize = useCallback(() => {
    if (chartContainerRef.current) {
      setDimensions({
        height: chartContainerRef.current.clientHeight,
        width: chartContainerRef.current.clientWidth,
      });
    }
  }, [chartContainerRef]);

  useEffect(() => {
    if (chartContainerRef.current) {
      setDimensions({
        height: chartContainerRef.current.clientHeight,
        width: chartContainerRef.current.clientWidth,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (thresholdsForMeasurements.hasOwnProperty(type)) {
      let markerArray: any = thresholdsForMeasurements[
        type as keyof MeasurementsWithMarkers
      ].map((threshold, index) => ({
        axis: "y",
        value: threshold,
        lineStyle: { stroke: "rgba(0, 0, 0, .35)", strokeWidth: 2 },
      }));
      setMarkers(markerArray);
    }
  }, [type]);

  // useEffect(() => {
  //   console.log("markers", markers);
  // }, [markers]);

  //   useEffect(() => {
  //     console.log("dimensions", dimensions);
  //   }, [dimensions]);

  return (
    <ChartContainer ref={chartContainerRef}>
      {influxData && (
        <Line
          width={dimensions.width}
          height={dimensions.height}
          margin={{ top: 30, right: 60, bottom: 30, left: 60 }}
          data={influxData.graphSettings}
          markers={markers}
          colors={["#81bbff"]}
          xScale={{
            format: "%Y-%m-%dT%H:%M:%S%Z",
            type: "time",
            useUTC: true,
            precision: "minute",
          }}
          // xScale={{
          //   type: "time",
          //   format: "%Y-%m-%d",
          //   useUTC: false,
          //   precision: "day",
          // }}
          //xFormat="time:%d.%m.%Y %H:%M:%S"
          xFormat="time:%d.%m %H:%M Uhr"
          yScale={{
            type: "linear",
            stacked: false,
            min: "auto",
            max: "auto",
          }}
          axisLeft={{
            legend: `[${influxData.unit_of_measurement}]`,
            legendOffset: -50,
            legendPosition: "middle",
          }}
          axisBottom={{
            tickValues: 6,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: "%a %d.%m %H:%M",
            legend: "Time",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          curve={"monotoneX"}
          enablePointLabel={showPointLabels}
          pointSize={8}
          pointBorderColor="#fff"
          pointBorderWidth={2}
          pointLabelYOffset={-12}
          useMesh={true}
          enableSlices={false}
          animate={false}
        />
      )}
    </ChartContainer>
  );
};

export default InfluxChart;
