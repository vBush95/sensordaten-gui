import React from "react";
import { DeviceStatsSC, FlexContainerSC } from "./StyledComponents";
import DeviceStat from "./childComponents/DeviceStat/DeviceStat";
import THChart from "./childComponents/THChart/THChart";
import BarChart from "./childComponents/BarChart/BarChart";

import { DeviceObject } from "../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";

const DeviceStats = ({ device }: { device: DeviceObject }) => {
  return (
    <DeviceStatsSC>
      <FlexContainerSC>
        <DeviceStat
          device={device}
          header={"Temperatur/Luftfeuchtigkeit"}
          stat1={{ label: "Temperatur", key: "temperatur" }}
          stat2={{ label: "Luftfeuchtigkeit", key: "luftfeuchtigkeit" }}
        >
          <THChart
            temperature={device.entities.temperatur?.state}
            humidity={device.entities.luftfeuchtigkeit?.state}
          />
        </DeviceStat>
        <DeviceStat
          device={device}
          header={"Luftdruck"}
          stat1={{ label: "Luftdruck", key: "luftdruck" }}
        />

        <DeviceStat
          device={device}
          header={"Kohlenstoffdioxid-Gehalt"}
          stat1={{ label: "CO₂", key: "co2" }}
        >
          <BarChart device={device} type={"co2"} />
        </DeviceStat>
        <DeviceStat
          device={device}
          header={"Feinstaubbelastung"}
          stat1={{ label: "PM10", key: "pm10" }}
          stat2={{ label: "PM2.5", key: "pm25" }}
        >
          <BarChart device={device} type={"pm"} />
        </DeviceStat>
      </FlexContainerSC>
    </DeviceStatsSC>
  );
};

export default DeviceStats;
