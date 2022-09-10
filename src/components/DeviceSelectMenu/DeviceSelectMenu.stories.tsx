// @ts-nocheck

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import DeviceSelectMenu from "./DeviceSelectMenu";
import createDummyDevicesArray from "../../utilFunctions/createDummyDevicesArray/createDummyDevicesArray";

export default {
  title: "Components/Menu/DeviceSelectMenu",
  component: DeviceSelectMenu,
  argTypes: {
    maxWidth: {
      control: { type: "range", min: 15, max: 100, step: 5 },
    },
  },
  decorators: [withRouter],
} as ComponentMeta<typeof DeviceSelectMenu>;

const Template: ComponentStory<typeof DeviceSelectMenu> = (args) => (
  <DeviceSelectMenu {...args} />
);
export const DefaultDeviceSelectMenu = Template.bind({});

DefaultDeviceSelectMenu.args = {
  devices: createDummyDevicesArray(15),
  maxWidth: 30,
};
