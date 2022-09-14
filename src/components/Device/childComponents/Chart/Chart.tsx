import React, { useState, useEffect } from "react";

import { InfluxDB } from "@influxdata/influxdb-client-browser";

import TimeframeSelect from "./childComponents/TimeframeSelect/TimeframeSelect";
import AggregatorTimeSelect from "./childComponents/AggregatorTimeSelect/AggregatorTimeSelect";

import firstLetterToUpperCase from "../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";

import {
  ChartSC,
  SelectContainerSC,
  MeasurementSC,
  FlexContainerSC,
  FlexStartSC,
  CheckboxContainerSC,
} from "./StyledComponents";
import InfluxChart from "./childComponents/InfluxChart/InfluxChart";

import {
  org,
  influxUrl,
  bucket,
  influxQuerySettings,
} from "../../../../utils/settings";
import dataToPoints from "./functions/dataToPoints";
import { DeviceObject } from "../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { GraphData } from "./functions/dataToPoints";
import { StoryIndex } from "@storybook/store";

const client = new InfluxDB({
  url: influxUrl,
  token: import.meta.env.VITE_INFLUX_TOKEN,
});

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

export type InfluxQueryParams = {
  unit_of_measurement: string | undefined;
  field: string;
  domain: string;
  entity_id: null | string | undefined;
  aggregate_timeframe: string;
  aggregate_timeframes_for_period: {
    value: string;
    label: string;
  }[];
  start: string;
  arrayIndex: number;
};

const Chart = ({ device, show, name, graphDimensions }: ChartProps) => {
  const [influxQueryParams, setInfluxQueryParams] = useState<InfluxQueryParams>(
    {
      unit_of_measurement: "%",
      field: "value",
      domain: "sensor",
      entity_id: null,
      aggregate_timeframe: influxQuerySettings[0].aggregate_array[0].value,
      aggregate_timeframes_for_period: influxQuerySettings[0].aggregate_array,
      start: influxQuerySettings[0].value,
      arrayIndex: 0,
    }
  );

  const [influxData, setInfluxData] = useState<GraphData | null>(null);
  const [influxQuery, setInfluxQuery] = useState("");
  const [showPointLabels, setShowPointLabels] = useState(false);

  const toggleCheckbox = () => {
    setShowPointLabels((prevState) => !prevState);
  };

  useEffect(() => {
    if (show) {
      let query = `from(bucket: "${bucket}")
      |> range(start: -${influxQueryParams.start})
      |> filter(fn: (r) => r["_measurement"] == "${influxQueryParams.unit_of_measurement}")
      |> filter(fn: (r) => r["_field"] == "${influxQueryParams.field}")
      |> filter(fn: (r) => r["domain"] == "${influxQueryParams.domain}")
      |> filter(fn: (r) => r["entity_id"] == "${influxQueryParams.entity_id}")
      |> aggregateWindow(every: ${influxQueryParams.aggregate_timeframe}, fn: mean, createEmpty: false)
      |> yield(name: "mean")`;

      // |> filter(fn: (r) => r._value > 15)

      setInfluxQuery((prevQuery) => (prevQuery === query ? prevQuery : query));

      // |> filter(fn: (r) => r["friendly_name"] == "Luftfeuchtigkeit Arbeitszimmer HausC")
      //  |> filter(fn: (r) => r["source"] == "HA")
      //  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
      //  |> yield(name: "mean")`;
    }
  }, [
    influxQueryParams.start,
    influxQueryParams.unit_of_measurement,
    influxQueryParams.field,
    influxQueryParams.domain,
    influxQueryParams.entity_id,
    influxQueryParams.aggregate_timeframe,
    show,
  ]);

  useEffect(() => {
    // if (show) {
    if (show && influxQuery) {
      let res: InfluxResponseObject[] = [];
      const queryApi = client.getQueryApi(org);

      queryApi.queryRows(influxQuery, {
        next(row, tableMeta) {
          const o = tableMeta.toObject(row);
          // console.log(`${o._time} ${o._measurement}: ${o._field}=${o._value}`);
          // console.log(tableMeta);
          res.push(o);
        },
        error(error) {
          console.error(error);
          console.log("Finished ERROR");
        },
        complete() {
          console.log("Finished SUCCESS");
          console.log("result", res);
          let result = dataToPoints(res);
          setInfluxData(result);
        },
      });
    }
    //}
  }, [influxQuery, show]);

  // useEffect(() => {
  //   console.log("influxData-state", influxData);
  // }, [influxData]);
  // useEffect(() => {
  //   console.log("influxquery-state", influxQueryParams);
  // }, [influxQueryParams]);

  useEffect(() => {
    setInfluxQueryParams((prevQueryParams) => ({
      ...prevQueryParams,
      entity_id: device.entities[name]?.entity_id,
      unit_of_measurement: device.entities[name]?.unit_of_measurement,
    }));
  }, [device, name]);

  useEffect(() => {
    return () => {
      return setInfluxQueryParams((prevQueryParams) => ({
        ...prevQueryParams,
        aggregate_timeframe: influxQuerySettings[0].aggregate_array[0].value,
        aggregate_timeframes_for_period: influxQuerySettings[0].aggregate_array,
        start: influxQuerySettings[0].value,
      }));
    };
  }, [show]);

  // useEffect(() => {
  //   console.log("influxquery", influxQueryParams);
  // }, [influxQueryParams]);

  // useEffect(() => {
  //   console.log("influxquery", influxQuery);
  // }, [influxQuery]);

  // useEffect(() => {
  //   console.log({ name });
  // }, [name]);

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
              <TimeframeSelect
                name={name}
                setInfluxQueryParams={setInfluxQueryParams}
                influxQuerySettings={influxQuerySettings}
              />
              <AggregatorTimeSelect
                name={name}
                setInfluxQueryParams={setInfluxQueryParams}
                values={influxQueryParams.aggregate_timeframes_for_period}
              />
            </SelectContainerSC>
          </FlexContainerSC>
          <InfluxChart
            influxData={influxData}
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
