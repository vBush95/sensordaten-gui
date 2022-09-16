import { Point } from "../../../../../../../utils/thresholdsForMeasurements";

export type PolygonObject = {
  id: string;
  data: {
    x: number;
    y: number;
  }[];
};

const createPolygonObject = (points: Point[], text: string): PolygonObject => {
  const object = { id: text, data: [{ x: 0, y: 0 }] };
  object.data = points.map(([x, y], index) => {
    return { x, y };
  });
  return object;
};

export default createPolygonObject;
