import styled from "styled-components";

import { screenSizes } from "../../../utils/screenSizes";

export type Props = {
  widthMobile: string;
  widthTablet: string;
  widthDesktop: string;
  color: string;
  border: string;
  margin: string;
  padding: string;
};

const Image = styled.img<Props>`
  width: ${({ widthMobile }) => widthMobile};
  background-color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => `${border}`};
  padding: ${({ padding }) => `${padding}`};

  @media ${screenSizes.tablet} {
    min-width: ${({ widthTablet }) => widthTablet};
  }

  @media ${screenSizes.desktop} {
    min-width: ${({ widthDesktop }) => widthDesktop};
  }
`;

const LoginPageSC = styled.div`
  width: 100%;
  margin: auto;
  height: 80vh;
`;

export { LoginPageSC, Image };
