import React, { SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import {
  ListHeadingSC,
  StyledLinkSC,
  HeaderTextSC,
} from "./styledComponents/StyledComponents";

export type MenuProps = {
  text: string;
  navLink?: string;
  children: React.ReactNode;
  setUnfolded?: React.Dispatch<SetStateAction<boolean>>;
};

const MenuItem: React.FC<MenuProps> = ({
  text,
  navLink,
  children,
  setUnfolded,
}: MenuProps) => {
  let activeStyle: React.CSSProperties = {
    textDecoration: "underline",
    color: "#0075ff",
    textDecorationThickness: "3px",
  };

  return (
    <ListHeadingSC
      onClick={
        navLink
          ? undefined
          : setUnfolded
          ? () => setUnfolded((prevState) => !prevState)
          : undefined
      }
    >
      {navLink ? (
        <NavLink
          to={navLink}
          className="listItemLink"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          <StyledLinkSC>
            {children}
            <HeaderTextSC>{text}</HeaderTextSC>
          </StyledLinkSC>
        </NavLink>
      ) : (
        <StyledLinkSC>
          {children}
          <HeaderTextSC>{text}</HeaderTextSC>
        </StyledLinkSC>
      )}
    </ListHeadingSC>
  );
};

export default MenuItem;
