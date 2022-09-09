import React, { useState, useEffect, useCallback } from "react";

import { MenuSC, OrderedListSC } from "./styledComponents/StyledComponents";
// import GroupIcon from "./childComponents/groupIcon/GroupIcon";
// import TableIcon from "./childComponents/tableIcon/TableIcon";
// import MenuItem from "./childComponents/menuItem/MenuItem";
// import DeviceGroups from "./childComponents/deviceGroups/DeviceGroups";

import sortDevicesByGroup from "./functions/sortDevicesByGroup";
import { DeviceObject } from "../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { Groups } from "./functions/sortDevicesByGroup";

const DeviceSelectMenu = ({ devices }: { devices: DeviceObject[] }) => {
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
    <MenuSC>
      <OrderedListSC>
        <div>Device Select Menu</div>
        {/* <MenuItem text={"Übersicht"} navLink={"overview"} icon={TableIcon} />
        <MenuItem
          text={"Geräte Gruppen"}
          icon={GroupIcon}
          setUnfolded={setUnfolded}
          unfolded={unfolded}
        />
        {groups && <DeviceGroups groups={groups} unfolded={unfolded} />} */}
      </OrderedListSC>
    </MenuSC>
  );
};

export default DeviceSelectMenu;
