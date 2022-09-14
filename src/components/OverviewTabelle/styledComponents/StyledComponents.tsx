import styled from "styled-components";

import { screenSizes } from "../../../utils/screenSizes";
import { HoverPosition } from "../OverviewTabelle";

const ContainerSC = styled.table`
  padding: 0.6rem;
  padding-top: 0;
  background-color: white;
  width: fit-content;
  border-spacing: 0.3rem 0.3rem;
  border-radius: 0px 0px 0.3rem 0.3rem;

  @media ${screenSizes.tablet} {
    border-spacing: 0.5rem 0.3rem;
  }

  @media ${screenSizes.desktop} {
    border-spacing: 1.25rem 0.3rem;
  }
`;

const FrameSC = styled.div`
  border-radius: 0.3rem;
  background-color: #dcdcdc;
  position: relative;
`;

const ArrowLinkSC = styled.div<HoverPosition>`
  position: absolute;
  right: -9.75rem;
  transition: all 0.3s;
  transition-delay: 0.1s;
  opacity: ${({ device }) => (device ? 1 : 0)};
  top: ${({ y }) => y && `${y + 72}px`};
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.3rem;
  border-radius: 0.3rem;
`;

const OverviewTabelleSC = styled.div`
  display: flex;
  width: fit-content;
  background-color: #dcdcdc;
  padding: 0 0.6rem;
  border-radius: 0.3rem;
  height: fit-content;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;

  @media ${screenSizes.tablet} {
    align-items: center;
    justify-content: center;
    padding: 0 0.6rem;
    padding-right: 0.6rem;
  }

  @media ${screenSizes.lDesktop} {
    align-items: center;
    justify-content: center;
    padding: 0.6rem 0;
    padding-right: 0.6rem;
  }
`;

export { OverviewTabelleSC, ContainerSC, FrameSC, ArrowLinkSC };
