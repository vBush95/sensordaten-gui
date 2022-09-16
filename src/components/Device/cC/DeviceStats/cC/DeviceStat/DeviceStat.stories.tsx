// @ts-nocheck

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import BarChart from "../BarChart/BarChart";

import DeviceStat from "./DeviceStat";

export default {
  title: "Components/Device/DeviceStats",
  component: DeviceStat,
  argTypes: {
    header: { description: "Text displayed as heading" },
    state1: {
      description: "Value of the Measurement",
      control: { type: "range", min: 1, max: 2000, step: 1 },
    },
    state2: {
      description: "Value of PM25",
      control: { type: "range", min: 1, max: 100, step: 0.5 },
    },
    stat1: {
      description:
        "label shown above the measurement value and key used to select the correct bar chart",
    },
    device: {
      description: "device obecject normally passed into the component",
    },
    stat2: { description: "only used for PM Charts displaying 2 Bars" },
    type: {
      table: {
        disable: true,
      },
    },
    color: {
      description:
        "the color of the box surrounding the measurement value --- normally determined after getting the data from home assistant",
    },
  },
} as ComponentMeta<typeof DeviceStat>;

const Template: ComponentStory<typeof DeviceStat> = (args) => {
  let device = {
    device: "test",
    group: null,
    entities: {
      co2: {
        color: args.color,
        state: args.state1,
        unit_of_measurement: args.unit_of_measurement,
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
      pm10: {
        color: args.color,
        state: args.state1,
        unit_of_measurement: args.unit_of_measurement,
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
      pm25: {
        color: args.color,
        state: args.state2,
        unit_of_measurement: args.unit_of_measurement,
        friendly_name: "test",
        entity_id: "test",
        last_updated: new Date(),
      },
    },
  };

  return (
    <DeviceStat
      device={device}
      header={args.header}
      stat1={args.stat1}
      stat2={args.stat2}
    >
      <BarChart device={device} type={args.type} />
    </DeviceStat>
  );
};

export const DeviceStatCO2 = Template.bind({});
DeviceStatCO2.args = {
  header: "Kohelstoffdioxid-Gehalt",
  stat1: { label: "CO₂", key: "co2" },
  stat2: undefined,
  state1: 500,
  state2: undefined,
  unit_of_measurement: "ppm",
  color: "#dcdcdc",
  type: "co2",
};

export const DeviceStatPM = Template.bind({});
DeviceStatPM.args = {
  header: "Feinstaubbelastung",
  stat1: { label: "PM10", key: "pm10" },
  stat2: { label: "PM25", key: "pm25" },
  state1: 10,
  state2: 10,
  unit_of_measurement: "ppm",
  color: "#dcdcdc",
  type: "pm",
};
