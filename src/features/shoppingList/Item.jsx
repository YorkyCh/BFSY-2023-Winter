// Item.js
import React from "react";
import { BsTrash } from "react-icons/bs";

const Item = ({ item, resolved, onDelete, onResolve, itemKey }) => {
  const handleClick = () => {
    onDelete(itemKey);
  };

  const handleResolve = () => {
    onResolve(itemKey);
  };

  return (
    <div
      className={`w-[150px] flex justify-between items-center rounded-md ${
        resolved ? "bg-gray-300" : "bg-white"
      }`}
      onClick={handleResolve}
    >
      <h1
        className={`pl-2 ${
          resolved ? "line-through text-gray-600" : "text-blue-600"
        }`}
      >
        {item}
      </h1>

      {!resolved && (
        <BsTrash size={20} className="cursor-pointer" onClick={handleClick} />
      )}
    </div>
  );
};

export default Item;
