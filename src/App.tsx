import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import generateEntities, {
  Entities,
} from "./utilFunctions/generateEntities/generateEntities";
import exampleEntitiesObject from "./utils/exampleEntitiesObject";

/**
 * Renders a card around some content.
 *
 * ```tsx
 * <CardB variant="secondary">
 *     <h5>My Title</h5>
 *     <p>My content</p>
 * </CardB>
 * ```
 *
 * The props type is written directly in the function definition:
 *
 * ```
 * export function CardB({
 *     children,
 *     variant = "primary",
 * }: PropsWithChildren<{
 *     variant: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
 * }>): ReactElement {
 *     // ...
 * }
 * ```
 *
 * This can make the TypeDoc documentation a bit cleaner for very simple components,
 * but it makes your code less readable.
 *
 * @category Component
 */

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [state, setState] = useState<Entities | null>(null);

  useEffect(() => {
    let entities = generateEntities(exampleEntitiesObject, 15);
    setState(entities);
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
    </div>
  );
};

export default App;
