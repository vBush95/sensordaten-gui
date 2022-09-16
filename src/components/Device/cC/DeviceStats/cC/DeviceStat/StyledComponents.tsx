import styled from "styled-components";
import { screenSizes } from "../../../../../../utils/screenSizes";

const HeaderSC = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media ${screenSizes.tablet} {
    font-size: 1rem;
  }

  @media ${screenSizes.desktop} {
  }
`;

const StatValueSC = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StatNameSC = styled.div`
  font-size: 0.65rem;
  font-weight: bold;
`;

const StatUnitSC = styled.div`
  font-size: 0.65rem;
  position: absolute;
  right: 0.6rem;
  font-weight: normal;
`;

export type SCProps = {
  color: string;
};

const StatContainerSC = styled.div<SCProps>`
  display: flex;
  position: relative;
  padding: 0.3rem;
  flex-direction: column;
  border-radius: 0.3rem;
  padding: 0.6rem 3rem;
  min-height: 1.2rem;
  background-color: ${({ color }) => (color ? color : "#dcdcdc")};
`;

const H2ContainerSC = styled.div`
  display: flex;
  position: absolute;
  top: -0.6rem;
  left: 0.3rem;
  background-color: white;
  padding: 0.15rem;
  border-radius: 0.3rem;
`;

const StatsSC = styled.div`
  display: flex;
`;

const FlexContainerSC = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const DeviceStatSC = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0.3rem;
  padding: 0.6rem;
  box-sizing: border-box;

  align-items: center;

  position: relative;

  @media ${screenSizes.tablet} {
    height: 22rem;
    flex: 1 0 22rem;
    margin: 0.3rem 0;
    max-width: 50%;
    min-width: 33%;
    &:nth-of-type(odd) {
      margin-right: 0.3rem;
    }
    &:nth-of-type(even) {
      margin-left: 0.3rem;
    }
  }

  @media ${screenSizes.lDesktop} {
    height: 22rem;
    flex: 1 0 20%;
    margin: 0;
    margin-right: 0.6rem;
    margin-top: 0.6rem;
    max-width: 50%;
    min-width: 22rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export {
  DeviceStatSC,
  StatContainerSC,
  StatNameSC,
  StatUnitSC,
  StatValueSC,
  StatsSC,
  FlexContainerSC,
  H2ContainerSC,
  HeaderSC,
};
