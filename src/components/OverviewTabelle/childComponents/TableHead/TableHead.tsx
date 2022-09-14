import React from "react";
import CategoryUnits from "./childComponents/CategoryUnits/CategoryUnits";
import CategoryHeadings from "./childComponents/CategoryHeadings/CategoryHeadings";
import { TableCategory } from "../../../../utils/settings";
import { Key } from "../../OverviewTabelle";

export type THProps = {
  tableCategories: TableCategory[];
  sortOrder: "ascending" | "descending";
  sortKey: Key;
  changeSortOrder: (key: Key) => void;
};

const TableHead = ({
  tableCategories,
  sortOrder,
  sortKey,
  changeSortOrder,
}: THProps) => {
  return (
    <thead>
      <CategoryUnits tableCategories={tableCategories} />
      <CategoryHeadings
        {...{ tableCategories, sortOrder, sortKey, changeSortOrder }}
      />
    </thead>
  );
};

export default TableHead;
