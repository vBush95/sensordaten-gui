import { DeviceObject } from "../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";

export type Groups = {
  notGrouped: string[];
  grouped: {
    [key: string]: string[];
  };
};

const sortDevicesByGroup = (allDevices: DeviceObject[]): Groups => {
  let devicesSortedByGroup: Groups = { notGrouped: [], grouped: {} };
  for (let i = 0; i < allDevices.length; i++) {
    let group = allDevices[i].group;
    if (group !== null) {
      let groupAlreadyCreated =
        devicesSortedByGroup.grouped.hasOwnProperty(group);
      if (!groupAlreadyCreated) {
        devicesSortedByGroup.grouped[group] = [];
      }
      devicesSortedByGroup.grouped[group].push(allDevices[i].device);
    } else {
      devicesSortedByGroup.notGrouped.push(allDevices[i].device);
    }
  }
  //console.log("devicesSortedByGroup", devicesSortedByGroup);
  return devicesSortedByGroup;
};

export default sortDevicesByGroup;
