// @ts-nocheck

import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Header from "./Header";
import {
  HeaderSC,
  Button,
  InvertedImage,
} from "./styledComponents/StyledComponents";

import hsbremerhaven from "../../assets/logo-2022.png";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    color: { description: "Color of the Header Bar" },
    loggedIn: {
      control: "boolean",
      description: "Toggle between logged in and logged out",
    },
    src: {
      control: {
        type: "file",
        accept: ".png",
      },
      description:
        "Image Source to be displayed on the top left side --- The Image is inverted... A non transparent image will be completely white",
    },
    height: {
      control: { type: "range", min: 1.5, max: 10, step: 0.1 },
      description: "Height of the Image in em",
    },
    paddingButton: {
      description:
        "Padding for the Logout Button: padding top and bottom - padding left and right",
    },
    border: {
      description: "Border of the Logout Button",
    },
    backgroundColor: {
      description: "Background Color of the Logout Button",
    },
    textColor: {
      description: "Text Color of the Logout Button",
    },
    hoverColor: {
      description: "Color of the Logout Button while hovering",
    },
    text: {
      description: "Text inside the Button",
      defaultValue: {
        summary: "logout",
        detail:
          "has to be modified inside the components - normally has no text prop",
      },
    },
    onClick: {
      description: "Function to be executed on Click",
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <HeaderSC color={args.color} textColor={"white"}>
      <InvertedImage {...args} alt="Logo Hochschule Bremerhaven" />
      {args.loggedIn && (
        <Button {...args} className="borderRad5">
          {args.text}
        </Button>
      )}
    </HeaderSC>
  );
};

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  color: "#282c34",
  loggedIn: true,
  src: hsbremerhaven,
  height: 3,
  paddingButton: "0.6em 0.9em",
  border: "1px solid #282c34",
  backgroundColor: "white",
  textColor: "#282c34",
  hoverColor: "#bfbfbf",
  text: "logout",

  onClick: action("Logout Button Clicked"),
};
