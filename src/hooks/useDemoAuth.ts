import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/DemoAuthProvider";

const useDemoAuth = () => {
  return useContext(AuthContext);
};

export default useDemoAuth;
