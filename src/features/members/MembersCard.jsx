// MembersCard.js
import React from "react";
import Member from "./Member";

const MembersCard = ({
  activeUser,
  owner,
  members,
  onDeleteMember,
  handleAddMember,
  newMember,
  setNewMember,
}) => {
  const handleDelete = (id) => {
    // Check if the active user is the owner and perform the deletion
    if (activeUser.role === "owner") {
      onDeleteMember(id);
    }
  };

  return (
    <div>
      <div className="flex justify-center p-3 flex-col items-center">
        <h1 className="text-white text-4xl font-bold">{owner.name}</h1>
        {activeUser.role === "owner" ? (
          <form onSubmit={handleAddMember}>
            <input
              className="bg-blue-200 m-5 rounded-md text-center"
              type="text"
              placeholder="Add Member"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
            />
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="flex max-h-[450px] gap-4 m-3 justify-between items-start flex-col flex-wrap">
        {members.map((member) =>
          member.role === "owner" ? (
            ""
          ) : (
            <Member
              key={member.id}
              member={member}
              activeUser={activeUser}
              onDelete={() => handleDelete(member.id)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MembersCard;
