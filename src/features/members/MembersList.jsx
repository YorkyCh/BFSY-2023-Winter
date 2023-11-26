import { useState, useEffect } from "react";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import getOwnerById from "../../services/getOwner";

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const MembersList = ({ shoppingList, showArchived, archivedLists }) => {
  const { id } = useParams();
  const renderLists = showArchived ? archivedLists : shoppingList;
  const list = renderLists.find((list) => list.id === parseInt(id));
  const [members, setMembers] = useState(list.members);
  const [newMemberName, setNewMemberName] = useState("");
  const owner = getOwnerById(list);

  useEffect(() => {
    if (list) {
      const nonOwnerMembers = list.members.filter(
        (member) => member.role !== "Owner"
      );
      setMembers(nonOwnerMembers);
    }
  }, [list]);

  const deleteMember = (memberId) => {
    const updatedMembers = members.filter((member) => member.id !== memberId);
    setMembers(updatedMembers);
  };

  const addMember = (event) => {
    event.preventDefault();

    if (newMemberName.trim() !== "") {
      const newMember = {
        id: generateRandomId(),
        name: newMemberName,
        role: "member",
      };

      setMembers([...members, newMember]);
      setNewMemberName("");
    }
  };

  return (
    <div className="flex flex-col m-3 border-2 border-blue-400 w-10/12 h-auto min-h-[30rem] max-h-[35rem] rounded-md overflow-auto">
      <h1 className="text-3xl font-bold text-center my-4 border-b-2 border-blue-400 pb-2">
        {owner.name}
      </h1>
      <form className="self-center" onSubmit={addMember}>
        <input
          placeholder="Enter name"
          className="text-center bg-blue-200 rounded-lg mr-2"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
        />
        <button type="submit" className="bg-blue-600">
          Add
        </button>
      </form>
      <ul className="grid grid-cols-4 gap-4 p-3">
        {members.map((member) => (
          <li key={member.id}>
            <div className="flex gap-3 items-center">
              <span>{member.name}</span>
              <HiOutlineArchiveBoxXMark
                size={18}
                className="cursor-pointer "
                onClick={() => deleteMember(member.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
