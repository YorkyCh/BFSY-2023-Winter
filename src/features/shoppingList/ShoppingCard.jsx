// ShoppingCard.js
import React, { useState } from "react";
import Item from "./Item";
import { BsFilterCircle } from "react-icons/bs";

const ShoppingCard = ({ shoppingList, activeUser }) => {
  const [items, setItems] = useState(shoppingList);
  const [newItem, setNewItem] = useState("");
  const [showResolved, setShowResolved] = useState(false);
  const [listName, setListName] = useState("List Name");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim() !== "") {
      const newItemObject = {
        name: newItem,
        key: items.length,
        resolved: false,
      };

      setItems([...items, newItemObject]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (key) => {
    const updatedItems = items.filter((item) => item.key !== key);
    setItems(updatedItems);
  };

  const handleResolveItem = (key) => {
    const updatedItems = items.map((item) =>
      item.key === key ? { ...item, resolved: !item.resolved } : item
    );
    setItems(updatedItems);
  };

  const toggleShowResolved = () => {
    setShowResolved(!showResolved);
  };

  const resolvedItems = items.filter((item) => item.resolved);
  const unresolvedItems = items.filter((item) => !item.resolved);
  const filteredItems = showResolved ? resolvedItems : unresolvedItems;

  return (
    <div>
      <h1
        className={
          activeUser.role === "owner"
            ? "flex justify-center pt-2 text-4xl text-black font-bold"
            : "flex justify-center pt-2 text-4xl text-white font-bold"
        }
      >
        {activeUser.role === "owner" ? (
          <input
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            className="rounded-lg text-center"
          />
        ) : (
          <h1>{listName}</h1>
        )}
      </h1>

      <div className="flex items-center justify-start ml-12">
        <form onSubmit={handleSubmit}>
          <input
            className="bg-blue-200 m-5 rounded-md text-center"
            type="text"
            placeholder="Add Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </form>
        <BsFilterCircle
          size={25}
          className="cursor-pointer"
          onClick={toggleShowResolved}
        />
      </div>
      <div className="flex max-h-[450px] gap-4 m-3 justify-between items-center flex-col flex-wrap">
        {filteredItems.map((item) => (
          <Item
            activeUser={activeUser}
            key={item.key}
            item={item.name}
            itemKey={item.key}
            resolved={item.resolved}
            onDelete={handleDeleteItem}
            onResolve={handleResolveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCard;
