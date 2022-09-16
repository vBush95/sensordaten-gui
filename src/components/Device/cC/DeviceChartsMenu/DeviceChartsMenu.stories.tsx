// @ts-nocheck

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import BarChart from "../BarChart/BarChart";
import { withRouter } from "storybook-addon-react-router-v6";

import DeviceChartsMenu from "./DeviceChartsMenu";
import { useState, useEffect } from "react";

export default {
  title: "Components/Device/DeviceChartsMenu",
  component: DeviceChartsMenu,
  argTypes: {
    device: {
      description: "device obecject normally passed into the component",
    },
    checked: {},
  },

  decorators: [withRouter],
} as ComponentMeta<typeof DeviceChartsMenu>;

const Template: ComponentStory<typeof DeviceChartsMenu> = (args) => {
  const [checked, setChecked] = useState(false);
  const [activeCharts, setActiveCharts] = useState({
    temperatur: false,
    co2: false,
    luftdruck: false,
    luftfeuchtigkeit: false,
    pm10: false,
    pm25: false,
  });

  let device = {
    device: "test",
    group: null,
    entities: {
      co2: {
        color: "white",
        state: 10,
        unit_of_measurement: "-",
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
      pm10: {
        color: "white",
        state: 10,
        unit_of_measurement: "-",
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
      pm25: {
        color: "white",
        state: 10,
        unit_of_measurement: "-",
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
      luftdruck: {
        color: "white",
        state: 10,
        unit_of_measurement: "-",
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
      temperatur: {
        color: "white",
        state: 10,
        unit_of_measurement: "-",
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
      luftfeuchtigkeit: {
        color: "white",
        state: 10,
        unit_of_measurement: "-",
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
    },
  };

  const handleCheckbox = () => {
    setChecked((prevCheck) => !prevCheck);
    if (!checked) {
      setActiveCharts({
        temperatur: true,
        co2: true,
        luftdruck: true,
        luftfeuchtigkeit: true,
        pm10: true,
        pm25: true,
      });
    } else {
      setActiveCharts({
        temperatur: false,
        co2: false,
        luftdruck: false,
        luftfeuchtigkeit: false,
        pm10: false,
        pm25: false,
      });
    }
  };

  return (
    <DeviceChartsMenu
      device={device}
      handleCheckboxClick={handleCheckbox}
      checked={checked}
      activeCharts={activeCharts}
      setActiveCharts={setActiveCharts}
    />
  );
};

export const DeviceChartsMenuDefault = Template.bind({});
DeviceChartsMenuDefault.args = {};
