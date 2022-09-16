import React from "react";
import GroupMemberDevice from "./cC/GroupMemberDevice/GroupMemberDevice";

export type Members = {
  groupMembers: string[];
};

const GroupListItems: React.FC<Members> = ({ groupMembers }) => {
  return (
    <>
      {groupMembers.map((member, i) => {
        return <GroupMemberDevice key={i} member={member}></GroupMemberDevice>;
      })}
    </>
  );
};

export default GroupListItems;
