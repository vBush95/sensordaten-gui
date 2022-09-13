import styled from "styled-components";
import { screenSizes } from "../../utils/screenSizes";

const DeviceContainerSC = styled.div`
  margin: 0;
  padding: 0.6rem;
  padding-top: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #dcdcdc;

  border-radius: 0.3rem;
  box-sizing: border-box;

  @media ${screenSizes.tablet} {
    margin: 0;
    padding: 0.6rem;
    padding-top: 0;
  }

  @media ${screenSizes.lDesktop} {
    margin-top: 0.6rem;
    margin-right: 0.6rem;
    padding: 0;
  }
`;

export default DeviceContainerSC;
