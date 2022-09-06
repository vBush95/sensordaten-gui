type Messwert = {
  name: string;
  device_class: string;
  state_class: string;
  unit_of_measurement: string;
  range: number[];
};

type Sensor = {
  type: string;
  messwerte: Messwert[];
} | null;

type Group = string | null;

export type EntitiesConstructor = {
  groups: Group[];
  sensors: Sensor[][];
};

const exampleEntitiesObject: EntitiesConstructor = {
  groups: ["obergeschoss", "untergeschoss", "Z", "C", null],
  sensors: [
    [
      {
        type: "dht22",
        messwerte: [
          {
            name: "temperatur",
            device_class: "temperature",
            state_class: "measurement",
            unit_of_measurement: "°C",
            range: [5, 35],
          },
          {
            name: "luftfeuchtigkeit",
            device_class: "humidity",
            state_class: "measurement",
            unit_of_measurement: "%",
            range: [0, 100],
          },
        ],
      },
      {
        type: "bme280",
        messwerte: [
          {
            name: "temperatur",
            device_class: "temperature",
            state_class: "measurement",
            unit_of_measurement: "°C",
            range: [5, 35],
          },
          {
            name: "luftfeuchtigkeit",
            device_class: "humidity",
            state_class: "measurement",
            unit_of_measurement: "%",
            range: [0, 100],
          },
          {
            name: "luftdruck",
            device_class: "pressure",
            state_class: "measurement",
            unit_of_measurement: "hPa",
            range: [900, 1100],
          },
        ],
      },
    ],
    [
      {
        type: "sds011",
        messwerte: [
          {
            name: "pm10",
            device_class: "dust",
            state_class: "measurement",
            unit_of_measurement: "µg/m³",
            range: [0, 75],
          },
          {
            name: "pm25",
            device_class: "dust",
            state_class: "measurement",
            unit_of_measurement: "µg/m³",
            range: [0, 75],
          },
        ],
      },
      null,
    ],
    [
      {
        type: "mhz19",
        messwerte: [
          {
            name: "co2",
            device_class: "air",
            state_class: "measurement",
            unit_of_measurement: "ppm",
            range: [400, 2000],
          },
        ],
      },
      null,
    ],
  ],
};

export { exampleEntitiesObject };
