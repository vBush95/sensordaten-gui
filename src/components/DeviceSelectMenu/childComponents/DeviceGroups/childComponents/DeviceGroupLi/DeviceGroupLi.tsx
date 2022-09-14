import React from "react";
import firstLetterToUpperCase from "../../../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";

import {
  DeviceGroupLiSC,
  OrderedListSC,
  NameSC,
  NumberSC,
} from "./styledComponents/StyledComponents";
import GroupListItems from "./childComponents/GroupListItems/GroupListItems";

export type GroupProps = {
  heading: string;
  groupMembers: string[];
  unfolded: boolean;
};

const DeviceGroupLi: React.FC<GroupProps> = ({
  heading,
  groupMembers,
  unfolded,
}) => {
  return (
    <DeviceGroupLiSC>
      <NumberSC>{groupMembers.length}</NumberSC>
      <details open={unfolded}>
        <NameSC>{firstLetterToUpperCase(heading)}</NameSC>
        <OrderedListSC>
          {groupMembers && <GroupListItems groupMembers={groupMembers} />}
        </OrderedListSC>
      </details>
    </DeviceGroupLiSC>
  );
};

export default DeviceGroupLi;
