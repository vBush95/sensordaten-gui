export type Colors = {
  good: string;
  warning: string;
  danger: string;
  missing: string;
};

export type Point = [number, number];

export type HumidityTemperatureFields = {
  polygonBehaglich: Point[];
  polygonNochBehaglich: Point[];
};

export type Thresholds = {
  colors: Colors;
  ht: HumidityTemperatureFields;
  co2: number[];
  pm10: number[];
  pm25: number[];
};

const thresholdsForMeasurements: Thresholds = {
  colors: {
    good: "#9fff7a",
    warning: "#fff37a",
    danger: "#ff7a7a",
    missing: "#dcdcdc",
  },
  ht: {
    polygonBehaglich: [
      [17.5, 75],
      [22.5, 65],
      [24, 35],
      [19, 38],
      [17.5, 75],
    ],
    polygonNochBehaglich: [
      [17, 85],
      [21.5, 80],
      [25, 60],
      [27, 30],
      [25.5, 18],
      [20, 20],
      [17, 40],
      [16, 75],
      [17, 85],
    ],
  },
  co2: [1000, 1500],
  pm10: [15, 40],
  pm25: [5, 25],
};

export default thresholdsForMeasurements;
