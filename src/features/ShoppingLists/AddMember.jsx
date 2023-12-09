import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { addMemberToList, fetchList } from "../../services/listApi";
import { fetchUsers } from "../../services/userApi";

const AddMember = ({ owner, membersList, notify }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [users, setUsers] = useState([]);
  const params = useParams();
  const listID = params.id;
  const queryClient = useQueryClient();
  const listMembers = membersList.filter((user) => user.role === "Member");
  console.log(listMembers);

  const {
    data: members,
    isLoading,
    isError,
  } = useQuery("listMembers", () => fetchUsers());

  useEffect(() => {
    if (members) {
      setUsers(members);
    }
  }, [members]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching shopping lists</div>;
  }

  const mutation = useMutation(
    (newMember) => addMemberToList(listID, newMember),
    {
      onSuccess: () => {
        console.log("Item added successfully!");
        queryClient.invalidateQueries("list");
      },
      onError: (error) => {
        console.error("Error adding member:", error);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedUser = users.find((user) => user.name === selectedMember);

    if (!selectedUser) {
      console.error("Selected user not found.");
      return;
    }

    const isAlreadyMember = listMembers.some(
      (member) => member.id === selectedUser.id
    );

    if (isAlreadyMember) {
      console.log("User is already a member of the list.");
      notify();
      return;
    }

    const newMember = {
      id: selectedUser.id,
      name: selectedUser.name,
      role: "Member",
    };

    mutation.mutate(newMember);
    setSelectedMember("");
  };

  return (
    <div className="col-span-3 p-2 flex gap-3 justify-center">
      <form className="lg:flex-row flex flex-col gap-2" onSubmit={handleSubmit}>
        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
          className="bg-gray-100 rounded-md text-center"
        >
          <option value="">Select a user</option>
          {users
            .filter((user) => user.id != owner.id)
            .map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
        </select>
        <button
          className="bg-blue-500 text-white rounded-md px-4"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMember;
