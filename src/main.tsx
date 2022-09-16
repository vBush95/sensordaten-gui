import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./components/AuthProvider/AuthProvider";
import { DemoAuthProvider } from "./components/AuthProvider/DemoAuthProvider";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    {/* <BrowserRouter>
      <AuthProvider> */}
    <DemoAuthProvider>
      <App />
    </DemoAuthProvider>
    {/* </AuthProvider>
  </BrowserRouter> */}
  </HashRouter>
);
