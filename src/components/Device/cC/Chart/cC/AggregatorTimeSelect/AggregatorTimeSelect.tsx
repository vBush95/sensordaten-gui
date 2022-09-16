import React, { useRef, useEffect } from "react";
import { InfluxQueryParams } from "../../Chart";
import { Label, Select } from "./StyledComponents";

export type ATSProps = {
  setInfluxQueryParams: React.Dispatch<React.SetStateAction<InfluxQueryParams>>;
  values: {
    value: string;
    label: string;
  }[];
  name: string;
};

const AggregatorTimeSelect = ({
  setInfluxQueryParams,
  values,
  name,
}: ATSProps) => {
  const selectEl = useRef<HTMLSelectElement | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);

    setInfluxQueryParams((prevParams) => ({
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

export default AggregatorTimeSelect;
