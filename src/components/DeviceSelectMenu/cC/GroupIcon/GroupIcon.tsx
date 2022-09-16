import React from "react";
import styled, { ThemedStyledFunction } from "styled-components";

export type Props = { unfolded: boolean; width: number; fill: string };

const GroupIcon = ({ unfolded, width, fill }: Props) => {
  const folderSvg = (
    <path d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z" />
  );
  const folderOpenSvg = (
    <path d="M147.8 192H480V144C480 117.5 458.5 96 432 96h-160l-64-64h-160C21.49 32 0 53.49 0 80v328.4l90.54-181.1C101.4 205.6 123.4 192 147.8 192zM543.1 224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480h447.1c12.12 0 23.2-6.852 28.62-17.69l96-192C583.2 249 567.7 224 543.1 224z" />
  );

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      fill={fill}
    >
      {unfolded ? folderOpenSvg : folderSvg}
    </SVG>
  );
};

export default GroupIcon;

const SVG = styled.svg`
  pointer-events: none;
  width: ${({ width }) => `${width}px`}
  overflow: visible;
  fill: ${({ fill }) => fill};
`;
