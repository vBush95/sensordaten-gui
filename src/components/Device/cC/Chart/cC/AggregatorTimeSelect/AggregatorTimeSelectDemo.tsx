import React, { useRef, useEffect } from "react";
import { DataParams } from "../../DemoChart";
import { Label, Select } from "./StyledComponents";

export type ATSProps = {
  setDataParams: React.Dispatch<React.SetStateAction<DataParams>>;
  values: {
    value: string;
    label: string;
  }[];
  name: string;
};

const AggregatorTimeSelectDemo = ({
  setDataParams,
  values,
  name,
}: ATSProps) => {
  const selectEl = useRef<HTMLSelectElement | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);

    setDataParams((prevParams) => ({
      ...prevParams,
      aggregate_timeframe: e.target.value,
    }));
  };

  useEffect(() => {
    if (selectEl.current) {
      selectEl.current.selectedIndex = 0;
    }
  }, [values]);

  return (
    <div>
      <Label htmlFor={`aggregatorTimeFrame${name}`}>
        Durchschnittswerte über{" "}
      </Label>
      <Select
        ref={selectEl}
        id={`aggregatorTimeFrame${name}`}
        onChange={handleSelectChange}
        defaultValue={values[0].value}
      >
        {values.map((entry, index) => {
          return (
            <option key={`option-${index}`} value={entry.value}>
              {entry.label}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default AggregatorTimeSelectDemo;
