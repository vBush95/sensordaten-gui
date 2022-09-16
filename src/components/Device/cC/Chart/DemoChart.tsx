import React, { useState, useEffect } from "react";

import TimeframeSelectDemo from "./cC/TimeframeSelect/TimeframeSelectDemo";
import AggregatorTimeSelectDemo from "./cC/AggregatorTimeSelect/AggregatorTimeSelectDemo";

import firstLetterToUpperCase from "../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";

import {
  ChartSC,
  SelectContainerSC,
  MeasurementSC,
  FlexContainerSC,
  FlexStartSC,
  CheckboxContainerSC,
} from "./StyledComponents";
import InfluxChart from "./cC/InfluxChart/InfluxChart";

import { demoTimeSeriesSettings } from "../../../../utils/settings";
import demoDataToPoints from "./functions/demoDataToPoints";
import { DeviceObject } from "../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { GraphData } from "./functions/dataToPoints";
import { determineBaseline } from "./functions/determineBaseline";

export type ChartProps = {
  device: DeviceObject;
  show: boolean;
  name: string;
  graphDimensions: {
    width: number;
    height: number;
  };
};

export type InfluxResponseObject = {
  [key: string]: any;
};

export type DataParams = {
  unit_of_measurement: string | undefined;
  aggregate_timeframe: string;
  aggregate_timeframes_for_period: {
    value: string;
    label: string;
  }[];
  start: string;
  arrayIndex: number;
  baseline: number;
};

const Chart = ({ device, show, name, graphDimensions }: ChartProps) => {
  const [dataParams, setDataParams] = useState<DataParams>({
    unit_of_measurement: "%",
    aggregate_timeframe: demoTimeSeriesSettings[0].aggregate_array[0].value,
    aggregate_timeframes_for_period: demoTimeSeriesSettings[0].aggregate_array,
    start: demoTimeSeriesSettings[0].value,
    arrayIndex: 0,
    baseline: 0,
  });

  const [data, setData] = useState<GraphData | null>(null);
  const [showPointLabels, setShowPointLabels] = useState(false);

  const toggleCheckbox = () => {
    setShowPointLabels((prevState) => !prevState);
  };

  useEffect(() => {
    if (show) {
      let timeseriesData = demoDataToPoints(dataParams);
      setData((prevData) =>
        prevData !== timeseriesData ? timeseriesData : data
      );
    }
  }, [
    dataParams.start,
    dataParams.unit_of_measurement,
    dataParams.aggregate_timeframe,
    show,
  ]);

  useEffect(() => {
    setDataParams((prevDataParams) => ({
      ...prevDataParams,
      unit_of_measurement: device.entities[name]?.unit_of_measurement,
      baseline: determineBaseline(device.entities[name]?.unit_of_measurement),
    }));
  }, [device, name]);

  useEffect(() => {
    return () => {
      return setDataParams((prevDataParams) => ({
        ...prevDataParams,
        aggregate_timeframe: demoTimeSeriesSettings[0].aggregate_array[0].value,
        aggregate_timeframes_for_period:
          demoTimeSeriesSettings[0].aggregate_array,
        start: demoTimeSeriesSettings[0].value,
      }));
    };
  }, [show]);

  return (
    <>
      {show && (
        <ChartSC>
          <FlexContainerSC>
            <FlexStartSC>
              <MeasurementSC>{firstLetterToUpperCase(name)}</MeasurementSC>
              <CheckboxContainerSC onClick={toggleCheckbox}>
                <input
                  type="checkbox"
                  id="showPointLabels"
                  name="showPointLabels"
                  checked={showPointLabels}
                  readOnly
                />
                <label htmlFor="showColor" style={{ cursor: "pointer" }}>
                  {showPointLabels
                    ? "Punkt Beschriftungen ausblenden"
                    : "Punkt Beschriftungen anzeigen"}
                </label>
              </CheckboxContainerSC>
            </FlexStartSC>
            <SelectContainerSC>
              <TimeframeSelectDemo
                name={name}
                setDataParams={setDataParams}
                influxQuerySettings={demoTimeSeriesSettings}
              />
              <AggregatorTimeSelectDemo
                name={name}
                setDataParams={setDataParams}
                values={dataParams.aggregate_timeframes_for_period}
              />
            </SelectContainerSC>
          </FlexContainerSC>
          <InfluxChart
            influxData={data}
            type={name}
            showPointLabels={showPointLabels}
            graphDimensions={graphDimensions}
          />
        </ChartSC>
      )}
    </>
  );
};

export default Chart;
