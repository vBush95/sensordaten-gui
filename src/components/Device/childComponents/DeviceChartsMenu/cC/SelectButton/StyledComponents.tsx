import styled from "styled-components";

import { screenSizes } from "../../../../../../utils/screenSizes";

const TextSC = styled.div`
  margin: 0.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  @media ${screenSizes.tablet} {
    font-size: 1.5rem;
  }

  @media ${screenSizes.lDesktop} {
    font-size: 1.5rem;
  }
`;

export type Props = {
  show: boolean;
};

const SelectButtonSC = styled.div<Props>`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ show }) => (show ? "#81bbff" : "#dcdcdc")};
  border-radius: 0.3rem;
  cursor: pointer;
  border: ${({ show }) => (show ? "2px solid #81bbff" : "2px solid #dcdcdc")};
  flex: 1 0 10rem;
  max-width: calc(50% - 0.9rem);
  margin: 0.3rem;

  &:hover {
    border: 2px solid white;
  }

  @media ${screenSizes.tablet} {
  }

  @media ${screenSizes.lDesktop} {
  }
`;

export { SelectButtonSC, TextSC };
