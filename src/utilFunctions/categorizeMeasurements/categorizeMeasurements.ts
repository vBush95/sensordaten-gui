import { Thresholds } from "./../../utils/thresholdsForMeasurements";
import checkForBehaglichkeit from "../checkForBehaglichkeit/checkForBehaglichkeit";
import { DeviceProperties } from "../groupEntities/groupEntities";
import { EntityInformation } from "../groupEntities/groupEntities";
import { TextAndColor } from "../checkForBehaglichkeit/checkForBehaglichkeit";
import setTextAndColor from "../setTextAndColor/setTextAndColor";

export type Entities = {
  [key: string]: EntityInformation & TextAndColor;
};

export type DevicePropertiesCategorized = {
  group: string | null;
  entities: Entities;
};

const categorizeMeasurements = (
  { entities, group }: DeviceProperties,
  thresholds: Thresholds
): DevicePropertiesCategorized => {
  let categorizedObject: DevicePropertiesCategorized = { group, entities: {} };

  if (entities.luftdruck) {
    categorizedObject.entities.luftdruck = { ...entities.luftdruck };
  }

  if (entities.temperatur && entities.luftfeuchtigkeit) {
    let { text, color } = checkForBehaglichkeit(
      entities.temperatur.state,
      entities.luftfeuchtigkeit.state,
      thresholds
    );
    categorizedObject.entities.luftfeuchtigkeit = {
      ...entities.luftfeuchtigkeit,
      text,
      color,
    };
    categorizedObject.entities.temperatur = {
      ...entities.temperatur,
      text,
      color,
    };
  }

  for (const [entity, values] of Object.entries(entities)) {
    if (entity === "pm10" || entity === "pm25" || entity === "co2") {
      let texts: string[] =
        entity === "pm10" || entity === "pm25"
          ? ["WHO Grenzwert überschritten", "EU Grenzwert überschritten"]
          : ["Lüftung empfohlen", "Lüftung dringend erforderlich"];

      let { text, color } = setTextAndColor(entity, values, texts, thresholds);

      categorizedObject.entities[entity] = {
        ...entities[entity],
        text,
        color,
      };
    }
  }

  return categorizedObject;
};

export default categorizeMeasurements;
