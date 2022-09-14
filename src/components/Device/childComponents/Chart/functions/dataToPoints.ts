import { InfluxResponseObject } from "../Chart";

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

const dataToPoints = (influxArray: InfluxResponseObject[]): GraphData => {
  let graphData: GraphData = {
    unit_of_measurement: influxArray[0]._measurement,
    graphSettings: [{ id: influxArray[0].entity_id, color: "blue", data: [] }],
  };
  for (let i = 0; i < influxArray.length; i++) {
    let splitTime = influxArray[i]._time.split(".");
    let timeString = splitTime[1] ? `${splitTime[0]}Z` : splitTime[0];
    let point = {
      x: timeString,
      y: Math.floor(influxArray[i]._value * 10) / 10,
    };
    graphData.graphSettings[0].data.push(point);
  }
  return graphData;
};

export default dataToPoints;
