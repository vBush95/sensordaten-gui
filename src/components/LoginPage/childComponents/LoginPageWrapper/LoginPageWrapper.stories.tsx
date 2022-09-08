// @ts-nocheck

import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { action, actions } from "@storybook/addon-actions";
import LoginButton from "./childComponents/LoginButton/LoginButton";
import LoginPageWrapper from "./LoginPageWrapper";
import { LoginPageSC, Image } from "../../styledComponents/StyledComponents";
import hsbremerhaven from "../../../../assets/logo-2022.png";

import { Default } from "./childComponents/LoginButton/LoginButton.stories";

export default {
  title: "Components/LoginPage",
  component: LoginPageWrapper,
  subcomponents: { LoginButton },
  argTypes: {
    widthMobile: {
      control: "select",
      options: ["15em", "20em", "25em"],
    },
    src: {
      control: {
        type: "file",
        accept: ".png",
      },
    },
    widthDesktop: {
      control: "inline-radio",
      options: ["30em", "35em", "40em"],
    },
  },
} as ComponentMeta<typeof LoginPageWrapper>;

// This will lead to { onClick: action('clicked'), ... }
const eventsFromObject = actions({
  onClick: "clicked",
  onMouseOver: "hovered",
});

const Template: ComponentStory<typeof LoginPageWrapper> = (args) => (
  <LoginPageWrapper>
    <Image {...args} className="borderRad5" alt="Logo Hochschule Bremerhaven" />
    <Default {...Default.args} />
    {/* <LoginButton {...Default.args} {...eventsFromObject} /> */}
  </LoginPageWrapper>
);

export const Solid = Template.bind({});
Solid.args = {
  widthMobile: "25em",
  widthTablet: "30em",
  widthDesktop: "35em",
  margin: "-2em",
  border: "1px solid #282c34",
  color: "white",
  padding: "0em",
  src: hsbremerhaven,
};

export const Dashed = Template.bind({});
Dashed.args = {
  widthMobile: "25em",
  widthTablet: "30em",
  widthDesktop: "35em",
  margin: "-2.2em",
  border: "5px dashed #282c34",
  color: "white",
  src: hsbremerhaven,
};
