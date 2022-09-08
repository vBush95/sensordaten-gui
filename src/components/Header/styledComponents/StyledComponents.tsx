import styled from "styled-components";

export type ButtonProps = {
  paddingButton: string;
  border: string;
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
  onClick: () => void;
  className?: string;
};

const Button = styled.button<ButtonProps>`
  margin: 0.3rem;
  margin-right: 0.7rem;
  padding: ${({ paddingButton }) => paddingButton};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 1rem;
  color: ${({ textColor }) => textColor};
  font-weight: bold;
  border: ${({ border }) => border};
  transition: background-color 0.3s;
  width: fit-content;
  &:hover {
    cursor: pointer;
    background-color: ${({ hoverColor }) => hoverColor};
  }
  &:active {
    background-color: white;
  }
`;

export type ImageProps = {
  height: number;
  alt: string;
  src: any;
};

const InvertedImage = styled.img<ImageProps>`
  height: ${({ height }) => `${height}em`};

  filter: brightness(0) invert(1);
`;

export type HeaderProps = {
  color: string;
  textColor: string;
};

const HeaderSC = styled.div<HeaderProps>`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  color: ${({ textColor }) => textColor};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export { HeaderSC, InvertedImage, Button };
