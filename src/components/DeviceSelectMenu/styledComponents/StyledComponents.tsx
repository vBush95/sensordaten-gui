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

const MenuSC = styled.div`
  min-width: 13em;
  background-color: transparent;

  @media ${screenSizes.desktop} {
    min-width: 20em;
  }
`;

export { MenuSC, OrderedListSC };
