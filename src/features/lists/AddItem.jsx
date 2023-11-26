import React, { useState } from "react";

const AddItem = ({ addItem, setIsModalOpen }) => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      name: itemName,
      quantity: itemQuantity,
    };
    addItem(newItem);
    setIsModalOpen(false);
    setItemName("");
    setItemQuantity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-4"
    >
      <h1 className="self-center text-xl font-bold">Add Item</h1>
      <input
        placeholder="item"
        type="text"
        className="bg-blue-200 rounded-lg text-center"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        placeholder="quantity"
        type="text"
        className="bg-blue-200 rounded-lg text-center"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <button type="submit" className="bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default AddItem;
