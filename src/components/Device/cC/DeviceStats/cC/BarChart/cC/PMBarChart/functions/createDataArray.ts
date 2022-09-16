import calculateBoundaryValues from "./calculateBoundaryValues";
import { PMBarObject } from "../../../../../../../../../utils/settings";

import { EntityITC } from "../PMBarChart";

export type BarObject = {
  [key: string]: string | number;
};

const createDataArray = (pm10: EntityITC, pm25: EntityITC): BarObject[] => {
  const newDataArray = [];
  if (pm25) {
    let pm25value = pm25.state;
    let bo25 = PMBarObject.pm25;
    const [value1, value2, value3] = calculateBoundaryValues(
      pm25value,
      bo25.steps
    );

    let barObject = {
      messwert: bo25.messwert,
      [bo25.label1.name]: value1,
      [`${bo25.label1.name}Color`]: bo25.label1.color,
      [bo25.label2.name]: value2,
      [`${bo25.label2.name}Color`]: bo25.label2.color,
      [bo25.label3.name]: value3,
      [`${bo25.label3.name}Color`]: bo25.label3.color,
    };

    newDataArray.push(barObject);
  }
  if (pm10) {
    let pm10value = pm10.state;
    let bo10 = PMBarObject.pm10;
    const [value1, value2, value3] = calculateBoundaryValues(
      pm10value,
      bo10.steps
    );

    let barObject = {
      messwert: bo10.messwert,
      [bo10.label1.name]: value1,
      [`${bo10.label1.name}Color`]: bo10.label1.color,
      [bo10.label2.name]: value2,
      [`${bo10.label2.name}Color`]: bo10.label2.color,
      [bo10.label3.name]: value3,
      [`${bo10.label3.name}Color`]: bo10.label3.color,
    };
    newDataArray.push(barObject);
  }
  return newDataArray;
};

export default createDataArray;
