import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Props } from "./GroupIcon";

import GroupIcon from "./GroupIcon";

export default {
  title: "Components/Menu/childComponents/Icons/GroupIcon",
  component: GroupIcon,
  argTypes: {
    fill: { control: { type: "color" }, description: "Color of the SVG Icon" },
    unfolded: { description: "State if the Folder is Open or Closed" },
    width: {
      description: "Width of the Image in px",
      control: { type: "range", min: 10, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof GroupIcon>;

const Template: ComponentStory<typeof GroupIcon> = (args: Props) => (
  <GroupIcon {...args} />
);
export const DefaultGroupIcon = Template.bind({});

DefaultGroupIcon.args = {
  width: 22,
  fill: "#282c34",
  unfolded: false,
};
