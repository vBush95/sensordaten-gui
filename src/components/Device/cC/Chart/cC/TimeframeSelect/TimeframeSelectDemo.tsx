import React from "react";
import { QuerySetting } from "../../../../../../utils/settings";
import { DataParams } from "../../DemoChart";
import { LabelSC, SelectSC } from "./StyledComponents";

export type TFSProps = {
  setDataParams: React.Dispatch<React.SetStateAction<DataParams>>;
  influxQuerySettings: QuerySetting[];
  name: string;
};

const TimeframeSelectDemo = ({
  setDataParams,
  influxQuerySettings,
  name,
}: TFSProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //console.log("event", e.target.value, e);

    //console.log("selectedIndex", e.target.selectedIndex);
    const index = e.target.selectedIndex;

    setDataParams((prevParams) => ({
      ...prevParams,
      start: e.target.value,
      aggregate_timeframes_for_period:
        influxQuerySettings[index].aggregate_array,
      arrayIndex: index,
      aggregate_timeframe: influxQuerySettings[index].aggregate_array[0].value,
    }));
  };

  return (
    <div>
      <LabelSC htmlFor={`timeFrame${name}`}>Zeitraum</LabelSC>
      <SelectSC id={`timeFrame${name}`} onChange={handleSelectChange}>
        {influxQuerySettings.map((entry, index) => {
          return (
            <option key={`option-${index}`} value={entry.value}>
              {entry.label}
            </option>
          );
        })}
      </SelectSC>
    </div>
  );
};

export default TimeframeSelectDemo;
