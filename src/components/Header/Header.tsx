import React from "react";

import useAuth from "../../hooks/useAuth";
import hsbremerhaven from "../../assets/logo-2022.png";

import {
  HeaderSC,
  Button,
  InvertedImage,
} from "./styledComponents/StyledComponents";

const Header = () => {
  const context = useAuth();
  return (
    <HeaderSC color={"#282c34"} textColor={"white"}>
      <InvertedImage
        alt="Logo Hochschule Bremerhaven"
        src={hsbremerhaven}
        height={3}
      />
      {context?.token && (
        <Button
          onClick={context.onLogout}
          paddingButton={"0.6em 0.9em"}
          border={"1px solid #282c34"}
          backgroundColor={"white"}
          textColor={"#282c34"}
          hoverColor={"#bfbfbf"}
          className="borderRad5"
        >
          logout
        </Button>
      )}
    </HeaderSC>
  );
};

export default Header;
