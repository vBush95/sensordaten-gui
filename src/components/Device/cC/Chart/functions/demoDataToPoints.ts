import { DataParams } from "../DemoChart";
import generateTimeseriesData from "./generateTimeseriesData";

export type GraphData = {
  unit_of_measurement: string;
  graphSettings: [
    {
      id: string;
      color: string;
      data: {
        x: string;
        y: number;
      }[];
    }
  ];
};

const demoDataToPoints = (dataParams: DataParams): GraphData => {
  let graphData: GraphData = {
    unit_of_measurement: "",
    graphSettings: [{ id: "", color: "", data: [] }],
  };
  if (dataParams.unit_of_measurement !== undefined) {
    graphData = {
      unit_of_measurement: dataParams.unit_of_measurement,
      graphSettings: [
        { id: dataParams.unit_of_measurement, color: "", data: [] },
      ],
    };
  }

  let timeseriesDataArray = generateTimeseriesData(dataParams);

  graphData.graphSettings[0].data = timeseriesDataArray;

  return graphData;
};

export default demoDataToPoints;
