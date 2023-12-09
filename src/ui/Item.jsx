import React from "react";
import DeleteItem from "../features/ShoppingLists/deleteItem";

const Item = ({ name, quantity, itemId }) => {
  return (
    <div className="flex gap-3 border-[2px] border-gray-400 mx-2 px-2 py-1 rounded-md justify-between">
      <h1 className="font-bold">
        {name}: {quantity}
      </h1>
      <DeleteItem itemId={itemId} />
    </div>
  );
};

export default Item;
