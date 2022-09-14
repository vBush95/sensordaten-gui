import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DeviceHeader from "./childComponents/DeviceHeader/DeviceHeader";
import DeviceStats from "./childComponents/DeviceStats/DeviceStats";
import DeviceContainerSC from "./StyledComponents";
import DeviceChartsMenu from "./childComponents/DeviceChartsMenu/DeviceChartsMenu";
import Chart from "./childComponents/Chart/Chart";

import { DeviceObject } from "../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import hasKey from "../../utilFunctions/hasKey/hasKey";

// token: process.env.INFLUX_DB_TOKEN,

export type ActiveCharts = {
  temperatur: boolean;
  co2: boolean;
  luftdruck: boolean;
  luftfeuchtigkeit: boolean;
  pm10: boolean;
  pm25: boolean;
};

const Device = ({ devices }: { devices: DeviceObject[] }) => {
  const [device, setDevice] = useState<DeviceObject>({
    device: "-",
    group: null,
    entities: {},
  });
  const [index, setIndex] = useState<number>(0);
  const [activeCharts, setActiveCharts] = useState<ActiveCharts>({
    temperatur: false,
    co2: false,
    luftdruck: false,
    luftfeuchtigkeit: false,
    pm10: false,
    pm25: false,
  });
  const [checked, setChecked] = useState<boolean>(false);
  const [graphDimensions, setGraphDimensions] = useState({
    width: 0,
    height: 0,
  });

  let params = useParams();

  const handleCheckboxClick = () => {
    setChecked((prevState) => !prevState);
    if (checked) {
      setActiveCharts({
        temperatur: false,
        co2: false,
        luftdruck: false,
        luftfeuchtigkeit: false,
        pm10: false,
        pm25: false,
      });
    }
    if (!checked) {
      let activeChartsObject: ActiveCharts = {
        temperatur: false,
        co2: false,
        luftdruck: false,
        luftfeuchtigkeit: false,
        pm10: false,
        pm25: false,
      };

      for (const [entity, values] of Object.entries(device.entities)) {
        if (hasKey(activeChartsObject, entity)) {
          activeChartsObject[entity] = true;
        }
      }

      setActiveCharts(activeChartsObject);
    }
  };

  useEffect(() => {
    if (devices) {
      //console.log("devices", devices, params);
      // check if the device array contains a device with the correct id
      let foundDevice = devices.find((item) => item.device === params.deviceId);
      let indexInArray = foundDevice ? devices.indexOf(foundDevice) : 0;
      //console.log("deviceExists", foundDevice, indexInArray);
      if (foundDevice) {
        setDevice(foundDevice);
        setIndex(indexInArray);

        setChecked(false);
      }
    }
  }, [devices, params]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    //console.log("params", params.deviceId);
    setActiveCharts({
      temperatur: false,
      co2: false,
      luftdruck: false,
      luftfeuchtigkeit: false,
      pm10: false,
      pm25: false,
    });
    setGraphDimensions({ width: 0, height: 0 });
  }, [params.deviceId]);

  return (
    <DeviceContainerSC>
      {device && (
        <>
          <DeviceHeader {...{ devices, device, index }} />
          <DeviceStats device={device} />
          <DeviceChartsMenu
            {...{
              handleCheckboxClick,
              checked,
              device,
              setActiveCharts,
              activeCharts,
            }}
          />

          {Object.keys(activeCharts).map((key, index) => (
            <Chart
              device={device}
              show={activeCharts[key as keyof ActiveCharts]}
              key={`InfluxChart-${index}`}
              name={key}
              graphDimensions={graphDimensions}
            />
          ))}
        </>
      )}
      {!device && (
        <>
          <div>Device: {params.deviceId}</div>
          <div>Device existiert nicht!</div>
        </>
      )}
    </DeviceContainerSC>
  );
};

export default Device;
