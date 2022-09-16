import React from "react";
import DeviceGroupLi from "./cC/DeviceGroupLi/DeviceGroupLi";

import { Groups } from "../../functions/sortDevicesByGroup";

export type Props = {
  groups: Groups;
  unfolded: boolean;
};

const DeviceGroups: React.FC<Props> = ({ groups, unfolded }) => {
  return (
    <>
      <DeviceGroupLi
        heading={"Ungruppiert"}
        groupMembers={groups.notGrouped}
        unfolded={unfolded}
      />
      {Object.keys(groups.grouped).map((group, i) => {
        return (
          <DeviceGroupLi
            key={i}
            heading={group}
            groupMembers={groups.grouped[group]}
            unfolded={unfolded}
          />
        );
      })}
    </>
  );
};
export default DeviceGroups;
