import React, { useState, useEffect, useCallback } from "react";
import ArrowLinkIcon from "./childComponents/ArrowLinkIcon/ArrowLinkIcon";

import sortData from "./functions/sortData";
import { tableCategories } from "../../utils/settings";
import TableHeading from "./childComponents/TableHeading/TableHeading";
import {
  OverviewTabelleSC,
  ContainerSC,
  FrameSC,
  ArrowLinkSC,
} from "./styledComponents/StyledComponents";
import TableHead from "./childComponents/TableHead/TableHead";
import TableBody from "./childComponents/TableBody/TableBody";

import { DeviceObject } from "../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { Entities } from "../../utilFunctions/generateEntities/generateEntities";

export type HoverPosition = {
  device: string | null;
  y: number | null;
};

export type Key = keyof Entities;

const OverviewTabelle = ({ devices }: { devices: DeviceObject[] }) => {
  const [sortKey, setSortKey] = useState<Key>("group");
  const [sortOrder, setSortOrder] =
    useState<"ascending" | "descending">("ascending");
  const [showColors, setShowColors] = useState(true);
  const [hoverPosition, setHoverPosition] = useState<HoverPosition>({
    device: null,
    y: null,
  });

  const sortedData = useCallback(() => {
    return sortData({
      tableData: devices,
      sortKey,
      reverse: sortOrder === "descending",
    });
  }, [devices, sortKey, sortOrder]);

  const changeSortOrder = (key: Key) => {
    if (key === sortKey) {
      setSortOrder((prevSortOrder) =>
        prevSortOrder === "ascending" ? "descending" : "ascending"
      );
    } else {
      setSortOrder("ascending");
    }
    setSortKey(key);
  };

  return (
    <OverviewTabelleSC>
      <FrameSC>
        <TableHeading
          setShowColors={setShowColors}
          showColors={showColors}
          header={"Aktuelle Messwerte"}
          checkboxLabel={"farbige Grenzwerte"}
        />
        <ContainerSC>
          <TableHead
            {...{ tableCategories, changeSortOrder, sortOrder, sortKey }}
          />
          <TableBody
            {...{ devices, sortedData, showColors, setHoverPosition }}
          />
        </ContainerSC>

        <ArrowLinkSC y={hoverPosition.y} device={hoverPosition.device}>
          <ArrowLinkIcon />
          {`Zur Einzelansicht`}
        </ArrowLinkSC>
      </FrameSC>
    </OverviewTabelleSC>
  );
};

export default OverviewTabelle;
