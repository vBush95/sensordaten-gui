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

export type DemoCardProps = {
  color: string;
  border: string;
  padding: string;
};

const DemoCardSC = styled.div<DemoCardProps>`
  margin-bottom: 5rem;
  width: 20em;
  background-color: ${({ color }) => color};
  border: ${({ border }) => `${border}`};
  padding: ${({ padding }) => `${padding}`};
  box-sizing: border-box;
`;

const SignatureSC = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #969696;
  text-align: center;
  margin-bottom: 2em;
`;

export { LoginPageSC, Image, DemoCardSC, SignatureSC };
