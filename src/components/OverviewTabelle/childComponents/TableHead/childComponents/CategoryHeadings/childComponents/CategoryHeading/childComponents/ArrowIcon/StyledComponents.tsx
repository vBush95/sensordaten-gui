import styled from "styled-components";
import { screenSizes } from "../../../../../../../../../../utils/screenSizes";
import { Rotation } from "./ArrowIcon";

const SVG = styled.svg<Rotation>`
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  height: 0.8rem;

  @media ${screenSizes.tablet} {
    height: 1.1rem;
  }

  @media ${screenSizes.desktop} {
    height: 1.25rem;
  }
`;

const AbsolutePositioning = styled.div`
  position: absolute;
  left: -0.7rem;
  overflow: visible;
  background-color: inherit;
  padding: 0.3rem 0;
  padding-left: 0.15rem;
  border-radius: 0.3rem 0px 0px 0.3rem;

  @media ${screenSizes.tablet} {
    left: -1rem;
    padding: 0.3rem 0;
    padding-left: 0.25rem;
  }

  @media ${screenSizes.desktop} {
    left: -1.5rem;
    padding: 0.3rem 0.1rem;
    padding-left: 0.5rem;
  }
`;

export { SVG, AbsolutePositioning };
