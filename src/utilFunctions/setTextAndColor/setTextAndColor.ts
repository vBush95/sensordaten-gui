import { TextAndColor } from "./../checkForBehaglichkeit/checkForBehaglichkeit";
import { Thresholds } from "./../../utils/thresholdsForMeasurements";
import { EntityInformation } from "../groupEntities/groupEntities";
import { ValueSC } from "../../components/Device/childComponents/DeviceStats/childComponents/THChart/StyledComponents";

export type EntityString = "pm10" | "pm25" | "co2";

const setTextAndColor = (
  entity: EntityString,
  values: EntityInformation,
  texts: string[],
  thresholds: Thresholds
): TextAndColor => {
  if (values.state !== undefined) {
    let textAndColor: TextAndColor =
      values.state === "unknown"
        ? { color: thresholds.colors.missing, text: "Messwert unbekannt" }
        : values.state < thresholds[entity][0]
        ? {
            color: thresholds.colors.good,
            text: "Grenzwert nicht ├╝berschritten",
          }
        : values.state < thresholds[entity][1]
        ? { color: thresholds.colors.warning, text: texts[0] }
        : { color: thresholds.colors.danger, text: texts[1] };

    return textAndColor;
  }
  return {};
};

export default setTextAndColor;
