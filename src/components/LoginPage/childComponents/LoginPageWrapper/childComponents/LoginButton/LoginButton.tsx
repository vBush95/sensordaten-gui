import React from "react";
import useAuth from "../../../../../../hooks/useAuth";
import useDemoAuth from "../../../../../../hooks/useDemoAuth";

import Button from "./styledComponents/StyledComponents";

export type Props = {
  /**
   * Text inside the Button
   */
  content: string;
  buttonColor: string;
  hoverColor: string;
  border: string;
  padding: string;
  textColor: string;
  onClick?: () => void;
};

/**
 * The LoginButton is only shown if the User is not authenticated.
 * Clicking the Button will redirect the user to login on the Home Assistant instance.
 */

const LoginButton: React.FC<Props> = (props) => {
  //const context = useAuth();
  const context = useDemoAuth();
  return (
    <Button
      className="borderRad5 margin03"
      {...props}
      onClick={
        props.onClick
          ? props.onClick
          : context
          ? context.onLogin
          : () => console.log("no context available")
      }
    >
      {props.content}
    </Button>
  );
};

export default LoginButton;
