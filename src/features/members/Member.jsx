import React from "react";
import { BsTrash } from "react-icons/bs";

const Member = ({ member, activeUser, onDelete }) => {
  return (
    <div className="w-[150px] flex justify-between items-center">
      <h1 className="text-white text-2xl pl-2">{member.name}</h1>
      {activeUser.role === "owner" ? (
        <BsTrash size={20} className="cursor-pointer" onClick={onDelete} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Member;
