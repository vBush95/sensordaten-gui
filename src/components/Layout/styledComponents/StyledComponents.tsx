import styled from "styled-components";
import { screenSizes } from "../../../utils/screenSizes";

const BodySC = styled.div`
  margin-top: 4.5em;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${screenSizes.tablet} {
    flex-direction: column;
  }
  @media ${screenSizes.lDesktop} {
    flex-direction: row;
  }
`;

const LayoutSC = styled.div`
  width: 100%;
`;

export { LayoutSC, BodySC };
