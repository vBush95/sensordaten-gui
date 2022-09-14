import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import TableIcon from "./TableIcon";
import { Props } from "./TableIcon";

export default {
  title: "Components/Menu/childComponents/Icons/TableIcon",
  component: TableIcon,
  argTypes: {
    fill: { control: { type: "color" }, description: "Color of the SVG Icon" },
    width: {
      description: "Width of the Image in px",
      control: { type: "range", min: 10, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof TableIcon>;

const Template: ComponentStory<typeof TableIcon> = (args: Props) => (
  <TableIcon {...args} />
);
export const DefaultTableIcon = Template.bind({});

DefaultTableIcon.args = {
  width: 22,
  fill: "#282c34",
};
