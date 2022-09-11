import { DeviceObject } from "../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { Key } from "../OverviewTabelle";

export type Props = {
  tableData: DeviceObject[];
  sortKey: Key;
  reverse: boolean;
};

const sortData = ({ tableData, sortKey, reverse }: Props): DeviceObject[] => {
  let originalArray = [...tableData];
  if (!sortKey) return originalArray;
  //console.log("sortkey", sortKey);
  //let a = "a";
  //console.log(a.localeCompare(null));
  let sortedData;
  //console.log("reverse", reverse);
  if (sortKey === "device" || sortKey === "group") {
    sortedData = originalArray.sort((a, b) => {
      if (a[sortKey] === null) {
        return 1;
      } else if (b[sortKey] === null) {
        return -1;
      } else if (reverse) {
        let test = a[sortKey]!.localeCompare(b[sortKey]!, undefined, {
          numeric: true,
          sensitivity: "base",
        });
        let returnValue = test === 0 ? 0 : test > 0 ? -1 : 1;

        return returnValue;
      } else {
        let test = a[sortKey]!.localeCompare(b[sortKey]!, undefined, {
          numeric: true,
          sensitivity: "base",
        });

        return test;
      }
    });
  } else {
    sortedData = originalArray.sort((a, b) => {
      let aS = a.entities[sortKey]?.state;
      let bS = b.entities[sortKey]?.state;

      if (aS === null || aS === undefined) {
        return 1;
      } else if (bS === null || bS === undefined) {
        return -1;
      } else if (reverse) {
        return aS > bS ? -1 : 1;
      } else {
        return aS > bS ? 1 : -1;
      }
    });
  }

  // if (reverse) {
  //   return sortedData.reverse();
  // }

  return sortedData;
};

export default sortData;
