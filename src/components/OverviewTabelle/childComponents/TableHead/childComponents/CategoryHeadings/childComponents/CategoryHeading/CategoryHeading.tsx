import React from "react";

import ArrowIcon from "./childComponents/ArrowIcon/ArrowIcon";
import { CategoryHeadingSC, ContainerSC } from "./StyledComponents";
import { Key } from "../../../../../../OverviewTabelle";
import { TableCategory } from "../../../../../../../../utils/settings";

export type CHProps = {
  sortOrder: "ascending" | "descending";
  sortKey: Key;
  changeSortOrder: (key: Key) => void;
  category: TableCategory;
};

const CategoryHeading = ({
  sortOrder,
  sortKey,
  category,
  changeSortOrder,
}: CHProps) => {
  return (
    <CategoryHeadingSC
      active={sortKey === category.key ? true : false}
      onClick={() => changeSortOrder(category.key)}
    >
      <ContainerSC>
        {sortKey === category.key ? (
          <ArrowIcon rotation={sortOrder === "ascending" ? 180 : 0} />
        ) : null}

        <div key={category.key}>{category.friendlyName}</div>
      </ContainerSC>
    </CategoryHeadingSC>
  );
};

export default CategoryHeading;
