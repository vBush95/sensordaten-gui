import React from "react";
import { HeaderRowSC, HeaderSC, CheckboxContainerSC } from "./StyledComponents";

export type Props = {
  setShowColors: React.Dispatch<React.SetStateAction<boolean>>;
  showColors: boolean;
  header: string;
  checkboxLabel: string;
};

const TableHeading = ({
  setShowColors,
  showColors,
  header,
  checkboxLabel,
}: Props) => {
  return (
    <HeaderRowSC>
      <HeaderSC>{header}</HeaderSC>
      <CheckboxContainerSC
        onClick={() => setShowColors((prevState) => !prevState)}
      >
        <input
          type="checkbox"
          id="showColors"
          name="showColors"
          checked={showColors}
          readOnly
        />
        <label htmlFor="showColor" style={{ cursor: "pointer" }}>
          {checkboxLabel}
        </label>
      </CheckboxContainerSC>
    </HeaderRowSC>
  );
};

export default TableHeading;
