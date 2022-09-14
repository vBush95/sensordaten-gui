import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import generateEntities, {
  Entities,
} from "./utilFunctions/generateEntities/generateEntities";
import { DeviceObject } from "./utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import exampleEntitiesObject from "./utils/exampleEntitiesObject";
import groupEntities from "./utilFunctions/groupEntities/groupEntities";

import labelEntitiesData from "./utilFunctions/labelEntitiesData/labelEntitiesData";
import thresholdsForMeasurements from "./utils/thresholdsForMeasurements";
import entitiesObjectToArray from "./utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import createDummyDevicesArray from "./utilFunctions/createDummyDevicesArray/createDummyDevicesArray";
import OverviewTabelle from "./components/OverviewTabelle/OverviewTabelle";
import Device from "./components/Device/Device";

import Layout from "./components/Layout/Layout";
import useAuth from "./hooks/useAuth";

const App: React.FC = () => {
  const [devices, setDevices] = useState<DeviceObject[]>([]);

  const context = useAuth();

  // useEffect(() => {
  //   let devicesArray = createDummyDevicesArray(100);

  //   setDevices(devicesArray);
  // }, [exampleEntitiesObject, generateEntities]);

  // useEffect(() => {
  //   console.log({ devices });
  // }, [devices]);

  useEffect(() => {
    if (context?.entities) {
      const convEntities = groupEntities(context.entities);
      //console.log({ convEntities });
      const labeledEntities = labelEntitiesData(
        convEntities,
        thresholdsForMeasurements
      );
      //console.log({ labeledEntities });
      const labeledEntitiesArray = entitiesObjectToArray(labeledEntities);
      //console.log({ labeledEntitiesArray });
      setDevices(labeledEntitiesArray);
    }
  }, [context?.entities]);

  return (
    <Routes>
      <Route path="/sensordaten/" element={<Layout devices={devices} />}>
        <Route
          path="overview"
          element={<OverviewTabelle devices={devices} />}
          //element={<p>Übersichtstabelle</p>}
        />
        <Route
          path="sensor/:deviceId"
          element={<Device devices={devices} />}
          //element={<p>device</p>}
        />
        <Route path="*" element={<p>Falsche URL</p>} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default App;
