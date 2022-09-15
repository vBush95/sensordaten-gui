import React from "react";

import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useDemoAuth from "../../hooks/useDemoAuth";

import DeviceSelectMenu from "../DeviceSelectMenu/DeviceSelectMenu";
import LoginPage from "../LoginPage/LoginPage";

import { LayoutSC, BodySC } from "./styledComponents/StyledComponents";
import Header from "../Header/Header";
import { DeviceObject } from "../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";

const Layout = ({ devices }: { devices: DeviceObject[] }) => {
  // const context = useAuth();
  const context = useDemoAuth();

  return (
    <LayoutSC>
      <Header />
      <BodySC>
        {context?.token ? (
          <>
            <DeviceSelectMenu devices={devices} />
            <Outlet />
          </>
        ) : (
          <LoginPage
            widthMobile={"20em"}
            widthTablet={"30em"}
            widthDesktop={"35em"}
          />
        )}
      </BodySC>
    </LayoutSC>
  );
};

export default Layout;
