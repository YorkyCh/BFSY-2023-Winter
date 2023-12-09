import React from "react";
import DeleteMember from "../features/ShoppingLists/DeleteMember";

const Member = ({ name, memberId, activeUser, owner }) => {
  console.log(owner);
  console.log(memberId);
  console.log(activeUser);
  return (
    <div className="flex gap-3 border-[2px] border-gray-400 mx-2 px-2 py-1 rounded-md justify-between">
      <h1 className="font-bold">{name}</h1>
      {(activeUser.id === owner.id && <DeleteMember memberId={memberId} />) ||
        (memberId === activeUser.id && <DeleteMember memberId={memberId} />)}
    </div>
  );
};

export default Member;
