// @ts-nocheck

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { useMemo } from "react";

import DeviceSelectMenu from "./DeviceSelectMenu";
import createDummyDevicesArray from "../../utilFunctions/createDummyDevicesArray/createDummyDevicesArray";

export default {
  title: "Components/Menu/DeviceSelectMenu",
  component: DeviceSelectMenu,
  argTypes: {
    maxWidth: {
      control: "inline-radio",
      options: [20, 40, 60, 80, 100],
      description:
        "MaxWidth of the whole menu in % relative to parent element --- normally the entire screen --- only used for testing",
    },
    numberOfPossibleDevices: {
      control: "inline-radio",
      options: [10, 20, 30, 40, 50],
      description:
        "Number passed to a function to create Dummy Devices (70/30 valid/invalid) --- only used for testing",
    },
    devices: {
      description:
        "Array of Devices actually passed to the components --- in this story the object is only shown as an example and is not actually used to create the menu element",
    },
  },
  decorators: [withRouter],
} as ComponentMeta<typeof DeviceSelectMenu>;

const Template: ComponentStory<typeof DeviceSelectMenu> = (args) => {
  let dummyDevices = useMemo(
    () => createDummyDevicesArray(args.numberOfPossibleDevices),
    [args.numberOfPossibleDevices]
  );
  return <DeviceSelectMenu devices={dummyDevices} maxWidth={args.maxWidth} />;
};

export const DefaultDeviceSelectMenu = Template.bind({});

DefaultDeviceSelectMenu.args = {
  maxWidth: 20,
  numberOfPossibleDevices: 10,
  devices: createDummyDevicesArray(10),
};
