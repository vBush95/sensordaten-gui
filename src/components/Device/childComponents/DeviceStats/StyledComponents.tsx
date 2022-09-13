import styled from "styled-components";
import { screenSizes } from "../../../../utils/screenSizes";

const FlexContainerSC = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.3rem;
  margin: -0.3rem;
  margin-left: 0;

  background-color: #dcdcdc;

  @media ${screenSizes.tablet} {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;

    flex-basis: 51%;
    justify-content: space-evenly;
  }

  @media ${screenSizes.lDesktop} {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    margin-top: -0.6rem;
    flex-basis: 51%;
  }
`;

const DeviceStatsSC = styled.div`
  width: 100%;
  height: 100%;

  @media ${screenSizes.tablet} {
  }
`;

export { DeviceStatsSC, FlexContainerSC };
