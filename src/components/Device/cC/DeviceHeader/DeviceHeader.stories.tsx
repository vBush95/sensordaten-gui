// @ts-nocheck

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import BarChart from "../BarChart/BarChart";
import { withRouter } from "storybook-addon-react-router-v6";

import DeviceHeader from "./DeviceHeader";

export default {
  title: "Components/Device/DeviceHeader",
  component: DeviceHeader,
  argTypes: {
    header: { description: "Text displayed as heading" },
    group: { description: "name of the group" },
    device: {
      description: "device obecject normally passed into the component",
    },
    index: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [withRouter],
} as ComponentMeta<typeof DeviceHeader>;

const Template: ComponentStory<typeof DeviceHeader> = (args) => {
  let devices = [];
  for (let i = 1; i <= 2; i++) {
    let device = {
      device: `${args.header}-${i}`,
      group: args.group,
      entities: {
        co2: {
          color: "white",
          state: 0,
          unit_of_measurement: "-",
          friendly_name: "test",
          entity_id: "test",
          last_updated: new Date(),
        },
        pm10: {
          color: "white",
          state: 0,
          unit_of_measurement: "-",
          friendly_name: "test",
          entity_id: "test",
          last_updated: new Date(),
        },
        pm25: {
          color: "white",
          state: 0,
          unit_of_measurement: "-",
          friendly_name: "test",
          entity_id: "test",
          last_updated: new Date(),
        },
      },
    };
    devices.push(device);
  }

  return <DeviceHeader device={devices[1]} devices={devices} index={1} />;
};

export const DeviceHeaderDefault = Template.bind({});
DeviceHeaderDefault.args = {
  header: "Device",
  group: "Testgruppe",
};
