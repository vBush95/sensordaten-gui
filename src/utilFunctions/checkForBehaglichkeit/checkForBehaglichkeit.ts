import classifyPoint from "robust-point-in-polygon";
import { Thresholds } from "../../utils/thresholdsForMeasurements";

export type TextAndColor = {
  text?: string;
  color?: string;
};

const checkForBehaglichkeit = (
  temperatur: number | string | undefined,
  luftfeuchtigkeit: number | string | undefined,
  { ht: { polygonBehaglich, polygonNochBehaglich }, colors }: Thresholds
): TextAndColor => {
  if (temperatur !== undefined && luftfeuchtigkeit !== undefined) {
    let temp: number;
    let luftf: number;
    if (typeof temperatur === "string") {
      temp = parseFloat(temperatur);
    } else {
      temp = temperatur;
    }
    if (typeof luftfeuchtigkeit === "string") {
      luftf = parseFloat(luftfeuchtigkeit);
    } else {
      luftf = luftfeuchtigkeit;
    }
    const isBehaglich = classifyPoint(polygonBehaglich, [temp, luftf]);
    const isNochBehaglich = classifyPoint(polygonNochBehaglich, [temp, luftf]);

    if (isBehaglich === 0 || isBehaglich === -1) {
      return { text: "behaglich", color: colors.good };
    }
    if (
      isBehaglich === 1 &&
      (isNochBehaglich === -1 || isNochBehaglich === 0)
    ) {
      return { text: "noch behaglich", color: colors.warning };
    } else {
      return { text: "nicht behaglich", color: colors.danger };
    }
  } else {
    return { text: "Temperatur/Luftfeuchtigkeit fehlt", color: colors.missing };
  }
};

export default checkForBehaglichkeit;
