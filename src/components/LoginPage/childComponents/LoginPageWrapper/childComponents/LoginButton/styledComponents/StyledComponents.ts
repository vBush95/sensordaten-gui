import styled from "styled-components";

import { Props } from "../LoginButton";

const Button = styled.button<Props>`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.buttonColor};
  font-size: 1.5em;
  color: ${(props) => props.textColor};
  font-weight: bold;
  border: ${(props) => `${props.border}`};
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    background-color: white;
  }
`;

export default Button;
