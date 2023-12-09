import React, { useState } from "react";
import { createList } from "../../services/listApi";
import { useMutation, useQueryClient } from "react-query";
import { v4 as uuidv4 } from "uuid";

const CreateList = ({ setShowModal, notifyCreate, activeUser }) => {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation((newList) => createList(newList), {
    onSuccess: () => {
      notifyCreate();
      queryClient.invalidateQueries("lists");
      setShowModal(false);
    },
    onError: (error) => {
      console.error("Error creating list:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newList = {
      id: uuidv4(),
      name: name,
      items: [],
      members: [{ id: activeUser.id, name: activeUser.name, role: "Owner" }],
    };

    // Submit the newItem object to the mutation function for further processing
    mutation.mutate(newList);

    setName("");
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <h1 className="font-bold text-xl">Create new Shopping List</h1>
      <input
        type="text"
        placeholder="name"
        className="bg-gray-100 rounded-md text-center"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 px-2 py-1 rounded-md text-white hover:bg-blue-500 shadow-md shadow-blue-400"
      >
        Create
      </button>
    </form>
  );
};

export default CreateList;
