import React from "react";
import CategoryHeading from "./childComponents/CategoryHeading/CategoryHeading";
import { ThemeProps } from "styled-components";
import { THProps } from "../../TableHead";

const CategoryHeadings = ({
  tableCategories,
  changeSortOrder,
  sortOrder,
  sortKey,
}: THProps) => {
  return (
    <tr>
      {tableCategories.map((category, i) => {
        return (
          <CategoryHeading
            key={`category-${i}`}
            {...{ changeSortOrder, sortOrder, sortKey, i, category }}
          />
        );
      })}
    </tr>
  );
};

export default CategoryHeadings;
