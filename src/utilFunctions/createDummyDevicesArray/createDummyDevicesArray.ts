import generateEntities from "../generateEntities/generateEntities";
import exampleEntitiesObject from "../../utils/exampleEntitiesObject";
import groupEntities from "../groupEntities/groupEntities";
import labelEntitiesData from "../labelEntitiesData/labelEntitiesData";
import thresholdsForMeasurements from "../../utils/thresholdsForMeasurements";
import entitiesObjectToArray from "../entitiesObjectToArray/entitiesObjectToArray";
import { DeviceObject } from "../entitiesObjectToArray/entitiesObjectToArray";

const createDummyDevicesArray = (numberOfDevices: number): DeviceObject[] => {
  let entities = generateEntities(exampleEntitiesObject, numberOfDevices);
  console.log({ entities });
  const groupedEntities = groupEntities(entities);
  const labeledEntities = labelEntitiesData(
    groupedEntities,
    thresholdsForMeasurements
  );
  const labeledEntitesArray = entitiesObjectToArray(labeledEntities);

  return labeledEntitesArray;
};

export default createDummyDevicesArray;
