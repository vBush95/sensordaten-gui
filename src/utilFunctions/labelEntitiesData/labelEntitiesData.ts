import categorizeMeasurements from "../categorizeMeasurements/categorizeMeasurements";
import { DevicesObject } from "../groupEntities/groupEntities";
import { Thresholds } from "../../utils/thresholdsForMeasurements";
import { DevicePropertiesCategorized } from "../categorizeMeasurements/categorizeMeasurements";

export type DevicesCategorized = {
  [key: string]: DevicePropertiesCategorized;
};

const labelEntitiesData = (
  object: DevicesObject,
  thresholds: Thresholds
): DevicesCategorized => {
  let labeledObject: DevicesCategorized = {};

  if (object) {
    for (const [device, properties] of Object.entries(object)) {
      //console.log(device);
      labeledObject[device] = categorizeMeasurements(properties, thresholds);
    }
  }

  return labeledObject;
};

export default labelEntitiesData;
