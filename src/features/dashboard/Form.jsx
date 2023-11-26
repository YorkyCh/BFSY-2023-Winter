import React, { useState } from "react";

const Form = ({ addNewList, activeUser, shoppingList, setShowModal }) => {
  const [listName, setListName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newList = {
      id: shoppingList.length + 2,
      name: listName,
      items: [],
      members: [
        {
          id: activeUser.id,
          name: activeUser.name,
          role: "Owner",
          email: activeUser.email,
          password: activeUser.password,
        },
      ],
    };

    addNewList(newList);
    setListName("");
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Create New List</h1>
      <input
        placeholder="List Name"
        className="text-center bg-blue-200 rounded-lg"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600">
        Create
      </button>
    </form>
  );
};

export default Form;
