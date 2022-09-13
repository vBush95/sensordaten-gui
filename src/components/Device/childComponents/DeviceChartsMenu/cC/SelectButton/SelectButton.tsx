import React from "react";

import EntityIcon from "./cC/EntityIcon";
import { SelectButtonSC, TextSC } from "./StyledComponents";

import firstLetterToUpperCase from "../../../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";
import { ActiveCharts } from "../../../../Device";

export type SBProps = {
  type: string;
  show: boolean;
  updateActiveCharts: React.Dispatch<React.SetStateAction<ActiveCharts>>;
};

const SelectButton = ({ type, show, updateActiveCharts }: SBProps) => {
  return (
    <SelectButtonSC
      show={show}
      onClick={() =>
        updateActiveCharts((prevState) => ({
          ...prevState,
          [type]: !prevState[type as keyof ActiveCharts],
        }))
      }
    >
      <EntityIcon type={type} />
      <TextSC>{firstLetterToUpperCase(type)}</TextSC>
    </SelectButtonSC>
  );
};

export default SelectButton;
