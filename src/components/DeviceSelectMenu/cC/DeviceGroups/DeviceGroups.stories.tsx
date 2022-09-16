import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import DeviceGroups from "./DeviceGroups";

export default {
  title: "Components/Menu/childComponents/DeviceGroups",
  component: DeviceGroups,
  argTypes: {},
  decorators: [withRouter],
} as ComponentMeta<typeof DeviceGroups>;

const Template: ComponentStory<typeof DeviceGroups> = (args) => (
  <ul>
    <DeviceGroups {...args} />
  </ul>
);
export const DefaultDeviceGroups = Template.bind({});

DefaultDeviceGroups.args = {
  groups: {
    notGrouped: ["Device1", "Device2"],
    grouped: {
      obergeschoss: ["Device3", "Device4"],
      untergeschoss: ["Device5", "Device6"],
    },
  },
  unfolded: false,
};
