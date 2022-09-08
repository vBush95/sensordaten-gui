import React from "react";
import { LoginPageSC } from "../../styledComponents/StyledComponents";

export type Props = {
  children: React.ReactNode;
};

const LoginPageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <LoginPageSC className="flexCenter flexColumn">{children}</LoginPageSC>
  );
};

export default LoginPageWrapper;
