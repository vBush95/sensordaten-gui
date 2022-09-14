import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { action, actions } from "@storybook/addon-actions";
import LoginButton from "./LoginButton";

export default {
  title: "Components/LoginPage/LoginButton",
  component: LoginButton,
  argTypes: {
    content: {
      control: "text",
    },
    buttonColor: {
      control: {
        type: "color",
      },
    },
  },
} as ComponentMeta<typeof LoginButton>;

// This will lead to { onClick: action('clicked'), ... }
const eventsFromObject = actions({
  onClick: "clicked",
  onMouseOver: "hovered",
});

const Template: ComponentStory<typeof LoginButton> = (args) => (
  <LoginButton {...args} /*{...eventsFromObject}*/ />
);

export const Default = Template.bind({});
Default.args = {
  content: "Home Assistant Login",
  buttonColor: "white",
  hoverColor: "#81bbff",
  border: "2px solid #282c34",
  padding: "0.3em 0.6em",
  textColor: "#282c34",
  onClick: action("Login Button Clicked"),
};
