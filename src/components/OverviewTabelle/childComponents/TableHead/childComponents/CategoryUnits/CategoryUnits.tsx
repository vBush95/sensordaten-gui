import React from "react";
import styled from "styled-components";
import { TableCategory } from "../../../../../../utils/settings";

export type CUProps = {
  tableCategories: TableCategory[];
};

const CategoryUnits = ({ tableCategories }: CUProps) => {
  return (
    <UnitsTableRow>
      {tableCategories.map((category, i) => {
        return (
          <UnitsTableField key={`measurment-${i}`}>
            {category.unit_of_measurement}
          </UnitsTableField>
        );
      })}
    </UnitsTableRow>
  );
};

export default CategoryUnits;

const UnitsTableRow = styled.tr`
  font-size: 1rem;
`;

const UnitsTableField = styled.td`
  text-align: center;
`;
