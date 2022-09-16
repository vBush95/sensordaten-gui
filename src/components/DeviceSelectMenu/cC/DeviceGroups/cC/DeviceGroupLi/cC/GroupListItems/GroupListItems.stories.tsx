import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import GroupListItems from "./GroupListItems";

export default {
  title: "Components/Menu/childComponents/GroupListItems",
  component: GroupListItems,
  argTypes: {},
  decorators: [withRouter],
} as ComponentMeta<typeof GroupListItems>;

const Template: ComponentStory<typeof GroupListItems> = (args) => (
  <GroupListItems {...args} />
);
export const DefaultGroupMemberDevice = Template.bind({});

DefaultGroupMemberDevice.args = {
  groupMembers: ["Device1", "Device2", "Device3"],
};
