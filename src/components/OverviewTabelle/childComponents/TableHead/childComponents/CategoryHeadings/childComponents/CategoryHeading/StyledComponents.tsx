import styled from "styled-components";
import { screenSizes } from "../../../../../../../../utils/screenSizes";

const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: inherit;
  height: inherit;
`;

export type Props = {
  active: boolean;
};

const CategoryHeadingSC = styled.th<Props>`
  font-size: 1rem;

  padding: 0.3rem;
  background-color: ${({ active }) => (active ? "#81bbff" : "white")};
  cursor: pointer;
  border-radius: ${({ active }) => (active ? "0 0.3em 0.3em 0" : "0.3em")};
  user-select: none;
  height: 100%;

  white-space: nowrap;
  &:hover {
    background-color: #dcdcdc;
  }

  @media ${screenSizes.tablet} {
    font-size: 1.2rem;
  }

  @media ${screenSizes.desktop} {
    font-size: 1.5rem;
  }
`;

export { CategoryHeadingSC, ContainerSC };
