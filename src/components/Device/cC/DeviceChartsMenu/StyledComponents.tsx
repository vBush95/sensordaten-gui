import styled from "styled-components";
import { screenSizes } from "../../../../utils/screenSizes";

const HeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${screenSizes.tablet} {
  }

  @media ${screenSizes.lDesktop} {
  }
`;

const CheckboxContainerSC = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.3rem;
  cursor: pointer;
  border-radius: 5px;
  user-select: none;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const HeaderTextSC = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.2rem 0.6rem;

  @media ${screenSizes.tablet} {
    font-size: 1.5rem;
  }

  @media ${screenSizes.lDesktop} {
    font-size: 1.5rem;
  }
`;

const ButtonsContainerSC = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DeviceChartsMenuSC = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  height: fit-content;
  border-radius: 0.3rem;
  padding: 0.6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media ${screenSizes.tablet} {
  }

  @media ${screenSizes.lDesktop} {
    margin-top: 0.9rem;
    margin-right: 0.6rem;
  }
`;

export {
  DeviceChartsMenuSC,
  HeaderSC,
  HeaderTextSC,
  CheckboxContainerSC,
  ButtonsContainerSC,
};
