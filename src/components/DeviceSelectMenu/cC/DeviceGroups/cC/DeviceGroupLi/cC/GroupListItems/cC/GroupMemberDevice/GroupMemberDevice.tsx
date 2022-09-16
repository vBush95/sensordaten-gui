import React from "react";
import { NavLink } from "react-router-dom";

import {
  MemberDeviceSC,
  StyledLinkSC,
} from "./styledComponents/StyledComponents";
import firstLetterToUpperCase from "../../../../../../../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";

export type Member = { member: string };

const GroupMemberDevice = ({ member }: Member) => {
  // console.log("member", member);
  return (
    <MemberDeviceSC>
      <NavLink to={`sensor/${member}`} className="listItemLink">
        {({ isActive }) => (
          <StyledLinkSC
            active={isActive}
            fontSize={16}
            backgroundColor={"white"}
            underlineColor={"#0075ff"}
            underlineThickness={0.2}
            hoverColor={"#dcdcdc"}
            textColor={"black"}
          >
            {firstLetterToUpperCase(member)}
          </StyledLinkSC>
        )}
      </NavLink>
    </MemberDeviceSC>
  );
};

export default GroupMemberDevice;
