import styled from "styled-components";
import { screenSizes } from "../../../../utils/screenSizes";

const HeaderSC = styled.div`
  font-size: 3em;
  font-weight: bold;
`;

const CheckboxContainerSC = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 0.3em;
  user-select: none;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const HeaderRowSC = styled.div`
  background-color: white;
  border-radius: 0.3em 0.3em 0 0;
  padding: 0.6em 1em 0 1em;
  display: flex;
  justify-content: space-between;

  @media ${screenSizes.tablet} {
    padding: 0.6em 1.5em 0 1.2em;
  }

  @media ${screenSizes.desktop} {
    padding: 0.6em 2em 0 2em;
  }
`;

export { HeaderRowSC, HeaderSC, CheckboxContainerSC };
