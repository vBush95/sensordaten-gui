import React from "react";
import PMBarChart from "./childComponents/PMBarChart/PMBarChart";
import CO2BarChart from "./childComponents/CO2BarChart/CO2BarChart";
import { DeviceObject } from "../../../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";

export type BCProps = {
  device: DeviceObject;
  type: string;
};

const BarChart = ({ device, type }: BCProps) => {
  let Chart =
    type === "pm" ? (
      <PMBarChart pm10={device.entities?.pm10} pm25={device.entities?.pm25} />
    ) : type === "co2" ? (
      <CO2BarChart co2={device.entities?.co2} />
    ) : (
      <div>Wrong Bar Chart Type</div>
    );

  let DisplayedChart = <div>-</div>;
  if (type === "pm") {
    DisplayedChart =
      device.entities?.pm10 && device.entities?.pm25 ? Chart : <div></div>;
  }
  if (type === "co2") {
    DisplayedChart = device.entities?.co2 ? Chart : <div></div>;
  }
  //console.log("barchart device", device);

  return <>{DisplayedChart}</>;
};

export default BarChart;
