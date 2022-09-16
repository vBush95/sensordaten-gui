import { EntityState } from "../THChart";

export type ChartBoundaries = {
  upperTemperature: number | undefined;
  lowerTemperature: number | undefined;
  upperHumidity: number | undefined;
  lowerHumidity: number | undefined;
};

const calculateChartBoundaries = (
  temperature: EntityState,
  humidity: EntityState
): ChartBoundaries | null => {
  //console.log("temperature", temperature);
  if (typeof temperature === "number" && typeof humidity === "number") {
    let upperTemperature, lowerTemperature, upperHumidity, lowerHumidity;
    if (temperature >= 16 && temperature <= 27) {
      upperTemperature = 28;
      lowerTemperature = 15;
    } else if (temperature <= 16) {
      upperTemperature = 28;
      lowerTemperature = temperature - 2;
      //console.log("run");
    } else if (temperature >= 27) {
      upperTemperature = temperature + 2;
      lowerTemperature = 15;
    }

    if (humidity >= 20 && humidity <= 85) {
      upperHumidity = 90;
      lowerHumidity = 10;
    } else if (humidity <= 20) {
      upperHumidity = 90;
      if (humidity - 10 <= 0) {
        lowerHumidity = 0;
      } else {
        lowerHumidity = humidity - 10;
      }
    } else if (humidity >= 85) {
      lowerHumidity = 10;

      if (humidity + 10 >= 100) {
        upperHumidity = 100;
      } else {
        upperHumidity = humidity + 10;
      }
    }
    return {
      upperTemperature,
      lowerTemperature,
      upperHumidity,
      lowerHumidity,
    };
  } else {
    return null;
  }
};

export default calculateChartBoundaries;
