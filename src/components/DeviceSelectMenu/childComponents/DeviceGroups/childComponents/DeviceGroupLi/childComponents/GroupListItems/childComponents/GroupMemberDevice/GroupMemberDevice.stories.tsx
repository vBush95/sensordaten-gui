// @ts-nocheck

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import GroupMemberDevice from "./GroupMemberDevice";

import {
  MemberDeviceSC,
  StyledLinkSC,
} from "./styledComponents/StyledComponents";
import firstLetterToUpperCase from "../../../../../../../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";
import { LinkProps } from "./styledComponents/StyledComponents";

export default {
  title: "Components/Menu/childComponents/GroupListItem",
  component: GroupMemberDevice,
  argTypes: {},
} as ComponentMeta<typeof GroupMemberDevice>;

export type Args = LinkProps & {
  member: string;
};

const Template: ComponentStory<typeof GroupMemberDevice> = (args: Args) => (
  <MemberDeviceSC>
    <div className="listItemLink">
      <StyledLinkSC active={args.active} {...args}>
        {firstLetterToUpperCase(args.member)}
      </StyledLinkSC>
    </div>
  </MemberDeviceSC>
);
export const DefaultGroupListItem = Template.bind({});

DefaultGroupListItem.args = {
  member: "Device1",
  active: false,
  fontSize: 16,
  backgroundColor: "white",
  underlineColor: "#0075ff",
  underlineThickness: 0.2,
  hoverColor: "#dcdcdc",
  textColor: "black",
  width: 13,
  height: 1.8,
};
