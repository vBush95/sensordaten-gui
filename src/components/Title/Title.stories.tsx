import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Title, { Props } from "./Title";

export default {
  title: "Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large Example Title",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Medium Example Title",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small Example Title",
};
