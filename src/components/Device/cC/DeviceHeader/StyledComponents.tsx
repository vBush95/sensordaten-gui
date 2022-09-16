import styled from "styled-components";

import { screenSizes } from "../../../../utils/screenSizes";

const H1SC = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  @media ${screenSizes.tablet} {
    font-size: 2.5rem;
    max-width: 20rem;
  }

  @media ${screenSizes.desktop} {
    font-size: 3rem;
    max-width: 25rem;
  }
`;

const H2SC = styled.div`
  margin-top: -1rem;
  margin-left: 0.2rem;
  font-size: 1.5rem;
`;

const H2MissingSC = styled.div`
  margin-top: -1rem;
  margin-left: 0.2rem;
  font-size: 1.5rem;
  visibility: hidden;
`;

const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 0.3rem;
  padding: 0.6rem;
  padding-top: 0px;
`;

const DeviceHeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0.6rem;

  @media ${screenSizes.tablet} {
    width: 100%;
    margin-bottom: 0.6rem;
  }

  @media ${screenSizes.lDesktop} {
    flex-direction: row;
    width: 100%;
    padding: 0;
    margin-bottom: 0.6rem;
  }
`;

export { DeviceHeaderSC, H1SC, H2MissingSC, H2SC, ContainerSC };
