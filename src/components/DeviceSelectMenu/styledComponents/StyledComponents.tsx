import styled from "styled-components";
import { screenSizes } from "../../../utils/screenSizes";

const OrderedListSC = styled.ol`
  padding: 0.6em;
  margin: 0.6em;
  box-sizing: border-box;
  display: list-item;
  list-style-type: none;
  border-radius: 5px;
  background-color: white;
`;

export type Props = {
  maxWidth?: number;
};
const MenuSC = styled.div<Props>`
  min-width: 13em;
  background-color: transparent;

  @media ${screenSizes.desktop} {
    min-width: 20em;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}%` : "fit-content")};
  }
`;

export { MenuSC, OrderedListSC };
