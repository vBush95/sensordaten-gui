import React, { useState, useEffect, useCallback } from "react";

import { MenuSC, OrderedListSC } from "./styledComponents/StyledComponents";
import GroupIcon from "./childComponents/GroupIcon/GroupIcon";
import TableIcon from "./childComponents/TableIcon/TableIcon";
import MenuItem from "./childComponents/MenuItem/MenuItem";
import DeviceGroups from "./childComponents/DeviceGroups/DeviceGroups";

import sortDevicesByGroup from "./functions/sortDevicesByGroup";
import { DeviceObject } from "../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { Groups } from "./functions/sortDevicesByGroup";

const DeviceSelectMenu = ({
  devices,
  maxWidth,
}: {
  devices: DeviceObject[];
  maxWidth?: number;
}) => {
  const [groups, setGroups] = useState<Groups>({ notGrouped: [], grouped: {} });
  const [unfolded, setUnfolded] = useState<boolean>(false);

  let sortDevices = useCallback(
    (d: DeviceObject[]) => sortDevicesByGroup(d),
    []
  );

  useEffect(() => {
    if (devices) {
      setGroups(sortDevices(devices));
    }
  }, [devices, sortDevices]);

  return (
    <MenuSC maxWidth={maxWidth ? maxWidth : undefined}>
      <OrderedListSC>
        <MenuItem text={"Übersicht"} navLink={"overview"}>
          <TableIcon width={22} fill={"#282c34"} />
        </MenuItem>
        <MenuItem text={"Geräte Gruppen"} setUnfolded={setUnfolded}>
          <GroupIcon unfolded={unfolded} width={22} fill={"#282c34"} />
        </MenuItem>

        {groups && <DeviceGroups groups={groups} unfolded={unfolded} />}
      </OrderedListSC>
    </MenuSC>
  );
};

export default DeviceSelectMenu;
