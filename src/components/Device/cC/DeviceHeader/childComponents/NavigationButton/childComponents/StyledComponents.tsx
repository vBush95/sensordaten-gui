import styled from "styled-components";

export type Rotation = {
  rotation: 180 | 0;
};

const SVG = styled.svg<Rotation>`
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  height: 2.5rem;
`;

const AbsolutePositioning = styled.div`
  fill: #282c34;
  display: flex;
  justify-content: center;
`;

export { SVG, AbsolutePositioning };
