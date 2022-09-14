import styled from "styled-components";

export type LinkProps = {
  active: boolean;
  fontSize: number;
  backgroundColor: string;
  underlineColor: string;
  underlineThickness: number;
  hoverColor: string;
  textColor: string;
  width?: number;
  height?: number;
};

const StyledLinkSC = styled.div<LinkProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 0.3em;
  text-decoration-color: ${({ underlineColor }) => underlineColor};
  color: ${({ textColor }) => textColor};
  padding: 0.3em;
  cursor: pointer;
  text-decoration-line: ${({ active }) => (active ? "underline" : "none")};
  text-decoration-thickness: ${({ underlineThickness }) =>
    `${underlineThickness}em`};
  text-align: left;
  width: ${({ width }) => (width ? `${width}em` : "100%")};
  height: ${({ height }) => (height ? `${height}em` : "fit-content")};
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const MemberDeviceSC = styled.div``;

export { MemberDeviceSC, StyledLinkSC };
