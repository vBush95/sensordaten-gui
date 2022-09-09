import { DevicesCategorized } from "../labelEntitiesData/labelEntitiesData";
import { DevicePropertiesCategorized } from "../categorizeMeasurements/categorizeMeasurements";

export type DeviceObject = DevicePropertiesCategorized & {
  device: string;
};

const entitiesObjectToArray = (object: DevicesCategorized): DeviceObject[] => {
  let array: DeviceObject[] = [];
  //console.log(object);
  if (object) {
    for (const [device, properties] of Object.entries(object)) {
      //console.log(device);
      array.push({ device, ...properties });
    }
  }
  // console.log("array", array);
  return array;
};

export default entitiesObjectToArray;
