import calculateBoundaryValues from "./calculateBoundaryValues";
import { CO2BarObject } from "../../../../../../../../../utils/settings";

import { EntityITC } from "../../PMBarChart/PMBarChart";

const createDataArray = (co2: EntityITC): any => {
  const newDataArray = [];
  if (co2) {
    let co2value = co2.state;
    let boCO2 = CO2BarObject.co2;
    const [value1, value2, value3] = calculateBoundaryValues(
      co2value,
      [1000, 500]
    );
    let barObject = {
      messwert: boCO2.messwert,
      [boCO2.label1.name]: value1,
      [`${boCO2.label1.name}Color`]: boCO2.label1.color,
      [boCO2.label2.name]: value2,
      [`${boCO2.label2.name}Color`]: boCO2.label2.color,
      [boCO2.label3.name]: value3,
      [`${boCO2.label3.name}Color`]: boCO2.label3.color,
    };

    newDataArray.push(barObject);
  }
  return newDataArray;
};

export default createDataArray;
