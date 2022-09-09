import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import generateEntities, {
  Entities,
} from "./utilFunctions/generateEntities/generateEntities";
import { DevicesObject } from "./utilFunctions/groupEntities/groupEntities";
import exampleEntitiesObject from "./utils/exampleEntitiesObject";
import groupEntities from "./utilFunctions/groupEntities/groupEntities";

import LoginPage from "./components/LoginPage/LoginPage";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [state, setState] = useState<DevicesObject | null>(null);

  useEffect(() => {
    let entities = generateEntities(exampleEntitiesObject, 15);
    console.log({ entities });
    const groupedEntities = groupEntities(entities);

    setState(groupedEntities);
  }, [exampleEntitiesObject, generateEntities]);

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <LoginPage
        widthMobile={"20em"}
        widthTablet={"30em"}
        widthDesktop={"35em"}
      />
    </div>
  );
};

export default App;
