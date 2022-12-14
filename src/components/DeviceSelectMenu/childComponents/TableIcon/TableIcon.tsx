import React from "react";
import styled from "styled-components";

export type Props = { width: number; fill: string };

const TableIcon = ({ width, fill }: Props) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      fill={fill}
    >
      <path d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z" />
    </SVG>
  );
};

export default TableIcon;

const SVG = styled.svg`
  pointer-events: none;
  width: ${({ width }) => `${width}px`}
  overflow: visible;
  fill: ${({ fill }) => fill};
`;
