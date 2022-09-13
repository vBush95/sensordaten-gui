// @ts-nocheck

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { useMemo } from "react";

import OverviewTabelle from "./OverviewTabelle";
import createDummyDevicesArray from "../../utilFunctions/createDummyDevicesArray/createDummyDevicesArray";

export default {
  title: "Components/Tabelle/OverviewTabelle",
  component: OverviewTabelle,
  argTypes: {
    numberOfPossibleDevices: {
      control: "inline-radio",
      options: [10, 20, 30, 40, 50],
      description:
        "Number passed to a function to create Dummy Devices (70/30 valid/invalid) --- only used for testing",
    },
    devices: {
      description:
        "Array of Devices actually passed to the components --- in this story the object is only shown as an example",
    },
    useDummyData: {
      description: "Toggle between DummyData range[10-50] or the devices Array",
    },
  },
  decorators: [withRouter],
} as ComponentMeta<typeof OverviewTabelle>;

const Template: ComponentStory<typeof OverviewTabelle> = (args) => {
  let dummyDevices = useMemo(
    () => createDummyDevicesArray(args.numberOfPossibleDevices),
    [args.numberOfPossibleDevices]
  );
  return (
    <OverviewTabelle
      devices={args.useDummyData ? dummyDevices : args.devices}
    />
  );
};

export const DefaultOverviewTabelle = Template.bind({});

DefaultOverviewTabelle.args = {
  numberOfPossibleDevices: 10,
  devices: createDummyDevicesArray(10),
  useDummyData: true,
};
