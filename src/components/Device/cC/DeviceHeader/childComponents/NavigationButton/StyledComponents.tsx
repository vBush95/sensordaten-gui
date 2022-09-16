import styled from "styled-components";
import { screenSizes } from "../../../../../../utils/screenSizes";

const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  user-select: none;
  border: 2px solid white;

  &:hover {
    background-color: #dcdcdc;
  }

  @media ${screenSizes.tablet} {
    flex-direction: row;
  }

  @media ${screenSizes.desktop} {
    flex-direction: row;
  }
`;

const DisabledSC = styled.div`
  background-color: white;
  padding: 0.6rem;
  border-radius: 0.3rem;
  cursor: not-allowed;
  user-select: none;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const TextSC = styled.div`
  font-size: 0.6rem;
  width: 4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  @media ${screenSizes.tablet} {
    font-size: 1.5rem;
    width: 10rem;
  }

  @media ${screenSizes.desktop} {
    font-size: 1.5rem;
    width: 10rem;
  }
`;

const NavigationButtonSC = styled.div``;

export { NavigationButtonSC, ContainerSC, DisabledSC, TextSC };
