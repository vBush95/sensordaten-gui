import classifyPoint from "robust-point-in-polygon";
import { Point } from "../../../../../../../utils/thresholdsForMeasurements";
import { Behaglichkeit } from "../THChart";

const checkBehaglichkeit = (
  point: Point,
  polygon1: Point[],
  polygon2: Point[]
): Behaglichkeit => {
  const isBehaglich = classifyPoint(polygon1, point);
  const isNochBehaglich = classifyPoint(polygon2, point);

  if (isBehaglich === 0 || isBehaglich === -1) {
    return { text: "behaglich", color: "green" };
  }
  if (isBehaglich === 1 && (isNochBehaglich === -1 || isNochBehaglich === 0)) {
    return { text: "noch behaglich", color: "#ffbe0b" };
  } else {
    return { text: "nicht behaglich", color: "red" };
  }
};

export default checkBehaglichkeit;
