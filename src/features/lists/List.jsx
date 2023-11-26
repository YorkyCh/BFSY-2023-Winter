import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../ui/Modal";
import AddItem from "./AddItem";

const List = ({
  shoppingList,
  setShoppingList,
  showArchived,
  archivedLists,
  setArchivedLists,
}) => {
  const { id } = useParams();
  const renderList = showArchived ? archivedLists : shoppingList;
  const selectedList = renderList.find((list) => list.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteItem = (itemId) => {
    const updatedList = renderList.map((list) => {
      if (list.id === parseInt(id)) {
        const updatedItems = list.items.filter((item) => item.id !== itemId);
        return { ...list, items: updatedItems };
      }
      return list;
    });

    if (showArchived) {
      setArchivedLists(updatedList);
    } else {
      setShoppingList(updatedList);
    }
  };

  const addItem = (newItem) => {
    const updatedList = renderList.map((list) => {
      if (list.id === parseInt(id)) {
        return { ...list, items: [...list.items, newItem] };
      }
      return list;
    });

    if (showArchived) {
      setArchivedLists(updatedList);
    } else {
      setShoppingList(updatedList);
    }
  };

  return (
    <>
      <div className="flex flex-col m-3 border-2 border-blue-400 w-10/12 h-auto min-h-[30rem] max-h-[35rem] rounded-md overflow-auto">
        <h1 className="text-3xl font-bold text-center my-4 border-b-2 border-blue-400 pb-2">
          {selectedList ? selectedList.name : "List Not Found"}
        </h1>
        <button
          className="w-[8rem] self-center"
          onClick={() => setIsModalOpen(true)}
        >
          Add
        </button>
        <table>
          <thead className="border-b-2">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>check</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {selectedList &&
              selectedList.items.map((item) => (
                <tr key={item.id} className="text-center">
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>check</td>
                  <td>
                    <button onClick={() => handleDeleteItem(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modal showModal={isModalOpen} setShowModal={setIsModalOpen}>
          <AddItem addItem={addItem} setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default List;
