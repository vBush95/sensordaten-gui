import React, { useState, createContext, useEffect, useCallback } from "react";

import { useNavigate } from "react-router-dom";

export type AuthValue = {
  token: boolean;
  onLogin: () => Promise<void>;
  onLogout: () => void;
};

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};
const AuthContext = createContext<AuthValue | null>(null);

const DemoAuthProvider = ({ children }: ChildrenProps) => {
  const [token, setToken] = useState<boolean>(false);

  let navigate = useNavigate();

  const storeTokenInSessionStorage = (auth: boolean): void => {
    sessionStorage.setItem("auth", JSON.stringify(auth));
  };

  const loadTokenInformationFromSessionStorage = () => {
    let authFromStorage = JSON.parse(sessionStorage.getItem("auth")!);

    return authFromStorage;
  };

  const checkForExistingAuth = useCallback(async () => {
    let auth = loadTokenInformationFromSessionStorage();

    if (auth) {
      setToken(true);
      navigate("sensordaten/overview", { replace: true });
    } else {
      setToken(false);
    }
  }, []);

  const handleLogin = async () => {
    setToken(true);
    storeTokenInSessionStorage(true);
    navigate("sensordaten/overview", { replace: true });
  };

  // const token = "test";
  // setToken(token);

  const handleLogout = () => {
    sessionStorage.removeItem("auth");
    setToken(false);
  };

  const value: AuthValue = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  useEffect(() => {
    checkForExistingAuth();
  }, [checkForExistingAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { DemoAuthProvider, AuthContext };
