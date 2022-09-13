import thresholdsForMeasurements from "./thresholdsForMeasurements";
import thresholdsIntoSteps from "../utilFunctions/thresholdsIntoSteps/thresholdsIntoSteps";

import { Key } from "../components/OverviewTabelle/OverviewTabelle";

export type AggregateTime = {
  value: string;
  label: string;
};

export type QuerySetting = {
  value: string;
  label: string;
  aggregate_array: AggregateTime[];
};

const influxQuerySettings: QuerySetting[] = [
  {
    value: "1d",
    label: "1 Tag",
    aggregate_array: [
      { value: "15m", label: "15 Minuten" },
      { value: "30m", label: "30 Minuten" },
      { value: "1h", label: "1 Stunde" },
      { value: "2h", label: "2 Stunden" },
    ],
  },
  {
    value: "3d",
    label: "3 Tage",
    aggregate_array: [
      { value: "30m", label: "30 Minuten" },
      { value: "1h", label: "1 Stunde" },
      { value: "2h", label: "2 Stunden" },
      { value: "3h", label: "3 Stunden" },
    ],
  },
  {
    value: "7d",
    label: "7 Tage",
    aggregate_array: [
      { value: "1h", label: "1 Stunde" },
      { value: "2h", label: "2 Stunden" },
      { value: "3h", label: "3 Stunden" },
      { value: "4h", label: "4 Stunden" },
      { value: "6h", label: "6 Stunden" },
    ],
  },
  {
    value: "30d",
    label: "1 Monat",
    aggregate_array: [
      { value: "3h", label: "3 Stunden" },
      { value: "6h", label: "6 Stunden" },
      { value: "12h", label: "12 Stunden" },
      { value: "1d", label: "1 Tag" },
    ],
  },
  {
    value: "90d",
    label: "3 Monate",
    aggregate_array: [
      { value: "4h", label: "4 Stunden" },
      { value: "6h", label: "6 Stunden" },
      { value: "12h", label: "12 Stunden" },
      { value: "1d", label: "1 Tag" },
      { value: "2d", label: "2 Tage" },
      { value: "3d", label: "3 Tage" },
    ],
  },
  {
    value: "180d",
    label: "6 Monate",
    aggregate_array: [
      { value: "6h", label: "6 Stunden" },
      { value: "12h", label: "12 Stunden" },
      { value: "1d", label: "1 Tag" },
      { value: "2d", label: "2 Tage" },
      { value: "3d", label: "3 Tage" },
      { value: "7d", label: "7 Tage" },
    ],
  },
  {
    value: "365d",
    label: "12 Monate",
    aggregate_array: [
      { value: "12h", label: "12 Stunden" },
      { value: "1d", label: "1 Tag" },
      { value: "3d", label: "3 Tage" },
      { value: "7d", label: "7 Tage" },
      { value: "14d", label: "14 Tage" },
      { value: "28d", label: "28 Tage" },
    ],
  },
];

export type TableCategory = {
  key: Key;
  friendlyName: string;
  unit_of_measurement: string;
};

const tableCategories: TableCategory[] = [
  { key: "device", friendlyName: "Gerät", unit_of_measurement: "" },
  { key: "group", friendlyName: "Gruppierung", unit_of_measurement: "" },
  {
    key: "temperatur",
    friendlyName: "Temperatur",
    unit_of_measurement: "[°C]",
  },
  {
    key: "luftfeuchtigkeit",
    friendlyName: "Luftfeuchtigkeit",
    unit_of_measurement: "[%]",
  },
  {
    key: "luftdruck",
    friendlyName: "Luftdruck",
    unit_of_measurement: "[hPa]",
  },
  {
    key: "co2",
    friendlyName: "CO₂",
    unit_of_measurement: "[ppm]",
  },
  {
    key: "pm10",
    friendlyName: "PM 10",
    unit_of_measurement: "[µg/m³]",
  },
  {
    key: "pm25",
    friendlyName: "PM 2.5",
    unit_of_measurement: "[µg/m³]",
  },
];

export type Label = {
  name: string;
  color: string;
};

export type EntityBarObject = {
  messwert: string;
  steps: number[];
  label1: Label;
  label2: Label;
  label3: Label;
};

export type PMBObject = {
  pm25: EntityBarObject;
  pm10: EntityBarObject;
};

const PMBarObject: PMBObject = {
  pm25: {
    messwert: "PM2.5",
    steps: thresholdsIntoSteps(thresholdsForMeasurements.pm25),
    label1: { name: "unbedenklich", color: "#9fff7a" },
    label2: { name: "WHO 2021", color: "#fff37a" },
    label3: { name: "EU-Grenzwert", color: "#ff7a7a" },
  },
  pm10: {
    messwert: "PM10",
    steps: thresholdsIntoSteps(thresholdsForMeasurements.pm10),
    label1: { name: "unbedenklich", color: "#9fff7a" },
    label2: { name: "WHO 2021", color: "#fff37a" },
    label3: { name: "EU-Grenzwert", color: "#ff7a7a" },
  },
};

const CO2BarObject = {
  co2: {
    messwert: "CO₂",
    steps: thresholdsIntoSteps(thresholdsForMeasurements.co2),
    label1: { name: "unbedenklich", color: "#9fff7a" },
    label2: { name: "unangenehm", color: "#fff37a" },
    label3: { name: "kritisch", color: "#ff7a7a" },
  },
};
const hassUrl = "http://192.168.178.75:8123";

const bucket = "Sensors";
const org = "Wiebusch";
const influxToken =
  "X8nBrX1zQOHpS_EaZ4P9NxOtqWgmBBV5F9FxxpTUrQgS9v9_Zgr7Q6Tcj7qehe_ExtaLqmyiaBFGoxOZHcw46Q==";

const influxUrl = "http://192.168.178.75:8086";

export {
  org,
  influxToken,
  hassUrl,
  influxUrl,
  bucket,
  CO2BarObject,
  PMBarObject,
  tableCategories,
  influxQuerySettings,
};
