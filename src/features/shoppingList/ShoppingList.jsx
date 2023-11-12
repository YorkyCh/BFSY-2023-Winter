// ShoppingList.js
import React, { useState } from "react";
import ShoppingCard from "./ShoppingCard";
import MembersCard from "../members/MembersCard";

const ShoppingList = () => {
  const [members, setMembers] = useState(membersArr);
  const [activeUser, setActiveUser] = useState(members[0]);
  const [newMember, setNewMember] = useState("");
  const owner = membersArr[0];

  const handleAddMember = (event) => {
    event.preventDefault();

    if (newMember.trim() !== "") {
      const newMemberObject = {
        id: members.length + 1,
        name: newMember,
        role: "member",
      };

      setNewMember("");
      setMembers((prevMembers) => [...prevMembers, newMemberObject]);
    }
  };

  const handleDeleteMember = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  return (
    <div className="flex flex-row justify-between">
      {/* Button To Test Member / Owner */}
      <button
        onClick={() =>
          setActiveUser(activeUser === members[0] ? members[1] : members[0])
        }
      >
        Button User/Owner
      </button>
      {/* .......................... */}
      <div className="w-5/12 h-[600px] bg-blue-600 m-12 rounded-xl flex-col">
        <ShoppingCard shoppingList={shoppingList} activeUser={activeUser} />
      </div>
      <div className="w-5/12 h-[600px] bg-blue-600 m-12 rounded-xl flex-col">
        <MembersCard
          activeUser={activeUser}
          owner={owner}
          members={members}
          onDeleteMember={handleDeleteMember}
          handleAddMember={handleAddMember}
          newMember={newMember}
          setNewMember={setNewMember}
        />
      </div>
    </div>
  );
};

export default ShoppingList;

const membersArr = [
  { id: 1, name: "Owner Name", role: "owner" },
  { id: 2, name: "Member 1", role: "member" },
  { id: 3, name: "Member 2", role: "member" },
  { id: 4, name: "Member 3", role: "member" },
];

const shoppingList = [
  { name: "Milk", key: 0 },
  { name: "Bread", key: 1 },
  { name: "Eggs", key: 2 },
  { name: "Apples", key: 3 },
  { name: "Bananas", key: 4 },
  { name: "Chicken", key: 5 },
  { name: "Rice", key: 6 },
  { name: "Pasta", key: 7 },
  { name: "Tomatoes", key: 8 },
  { name: "Spinach", key: 9 },
  { name: "Cheese", key: 10 },
  { name: "Yogurt", key: 11 },
  { name: "Orange Juice", key: 12 },
];
