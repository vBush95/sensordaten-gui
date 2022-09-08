import React, { useState, createContext, useEffect, useCallback } from "react";
import {
  getAuth,
  createConnection,
  subscribeEntities,
  ERR_HASS_HOST_REQUIRED,
  ERR_INVALID_AUTH,
  HassEntities,
  LoadTokensFunc,
  SaveTokensFunc,
  AuthData,
  Auth,
} from "home-assistant-js-websocket";
import { useNavigate } from "react-router-dom";

// import { url } from "../utils/settings";

const hassUrl = "http://192.168.178.75:8123";

type Error = 1 | 2 | 3 | 4;

export type AuthValue = {
  token: boolean;
  onLogin: () => Promise<void>;
  onLogout: () => void;
  error: Error | null;
  entities: HassEntities | null;
};

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};
const AuthContext = createContext<AuthValue | null>(null);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [token, setToken] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [authState, setAuthState] = useState<Auth | null>(null);
  const [entities, setEntities] = useState<HassEntities | null>(null);
  let navigate = useNavigate();

  const storeTokenInSessionStorage: SaveTokensFunc = (
    auth: AuthData | null
  ): void => {
    //console.log("store token ran", auth);
    sessionStorage.setItem("auth", JSON.stringify(auth));
  };

  const loadTokenInformationFromSessionStorage: LoadTokensFunc = () => {
    //console.log("load token information promise");
    let authFromStorage: AuthData = JSON.parse(sessionStorage.getItem("auth")!);
    let promise: Promise<AuthData | null | undefined> = new Promise(function (
      resolve,
      reject
    ) {
      resolve(authFromStorage);
      reject(undefined);
    });

    return promise;
  };

  const checkForExistingAuth = useCallback(async () => {
    let auth;
    try {
      auth = await getAuth({
        saveTokens: storeTokenInSessionStorage,
        loadTokens: loadTokenInformationFromSessionStorage,
      });

      if (auth) {
        setAuthState(auth);
        navigate("sensordaten/overview", { replace: true });
      }
      //console.log("auth", auth);
    } catch (err: any) {
      console.log(
        `Error Number: ${err} --- Click the login button to authenticate`
      );
      if (err === ERR_INVALID_AUTH) {
        console.log("error ran");
      }
      setError(err);
    }

    if (auth) {
      const connection = await createConnection({ auth });
      subscribeEntities(connection, (ent) => {
        console.log(ent);
        setEntities(ent);
      });
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  const handleLogin = async () => {
    try {
      // Redirect user to log in on their instance
      let auth = await getAuth({ hassUrl });
      console.log("auth", auth);
    } catch (err) {
      console.log(`Unknown error: ${err}`);
    }
  };

  // const token = "test";
  // setToken(token);

  const handleLogout = () => {
    if (authState) {
      authState.revoke();
    }
    sessionStorage.removeItem("auth");
    setToken(false);
    setAuthState(null);
    setEntities(null);
  };

  const value: AuthValue = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    error,
    entities,
  };

  useEffect(() => {
    checkForExistingAuth();
  }, [checkForExistingAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
