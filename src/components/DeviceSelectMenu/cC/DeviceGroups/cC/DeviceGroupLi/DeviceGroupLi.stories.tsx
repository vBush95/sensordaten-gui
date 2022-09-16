import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import DeviceGroupLi from "./DeviceGroupLi";

export default {
  title: "Components/Menu/childComponents/DeviceGroupLi",
  component: DeviceGroupLi,
  argTypes: {},
  decorators: [withRouter],
} as ComponentMeta<typeof DeviceGroupLi>;

const Template: ComponentStory<typeof DeviceGroupLi> = (args) => (
  <ul>
    <DeviceGroupLi {...args} />
  </ul>
);
export const DefaultGroupMemberDevice = Template.bind({});

DefaultGroupMemberDevice.args = {
  groupMembers: ["Device1", "Device2", "Device3"],
  heading: "Obergeschoss",
  unfolded: false,
};
