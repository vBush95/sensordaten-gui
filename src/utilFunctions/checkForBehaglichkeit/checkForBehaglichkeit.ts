import classifyPoint from "robust-point-in-polygon";
import { Thresholds } from "../../utils/thresholdsForMeasurements";

export type TextAndColor = {
  text?: string;
  color?: string;
};

const checkForBehaglichkeit = (
  temperatur: number | string,
  luftfeuchtigkeit: number | string,
  { ht: { polygonBehaglich, polygonNochBehaglich }, colors }: Thresholds
): TextAndColor => {
  if (
    typeof temperatur === "number" &&
    temperatur !== null &&
    typeof luftfeuchtigkeit === "number" &&
    luftfeuchtigkeit !== null
  ) {
    const isBehaglich = classifyPoint(polygonBehaglich, [
      temperatur,
      luftfeuchtigkeit,
    ]);
    const isNochBehaglich = classifyPoint(polygonNochBehaglich, [
      temperatur,
      luftfeuchtigkeit,
    ]);

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
