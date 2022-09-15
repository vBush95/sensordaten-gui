import React from "react";
import {
  LoginPageSC,
  Image,
  DemoCardSC,
  SignatureSC,
} from "./styledComponents/StyledComponents";
import LoginButton from "./childComponents/LoginPageWrapper/childComponents/LoginButton/LoginButton";

import hsbremerhaven from "../../assets/logo-2022.png";
import LoginPageWrapper from "./childComponents/LoginPageWrapper/LoginPageWrapper";

type Props = {
  widthMobile: string;
  widthTablet: string;
  widthDesktop: string;
};

const LoginPage: React.FC<Props> = (props) => {
  return (
    <>
      <LoginPageWrapper>
        <DemoCardSC
          className="borderRad5"
          color={"white"}
          border={"1px solid #282c34"}
          padding={"1em"}
        >
          Dies ist die <strong>Demo-Version</strong> ohne Authentifizierung und
          mit beispielhaften Messwerten.
        </DemoCardSC>
        <Image
          color={"white"}
          {...props}
          border={"1px solid #282c34"}
          margin={"-2em"}
          padding={"0"}
          className="borderRad5"
          alt="Logo Hochschule Bremerhaven"
          src={hsbremerhaven}
        />

        <LoginButton
          content={"Home Assistant Login"}
          buttonColor={"white"}
          hoverColor={"#81bbff"}
          border={"2px solid #282c34"}
          padding={"0.3em 0.6em"}
          textColor={"#282c34"}
        />
      </LoginPageWrapper>
      <SignatureSC>Jan-Ole Wiebusch</SignatureSC>
    </>
  );
};

export default LoginPage;
