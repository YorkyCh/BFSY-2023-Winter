import { useEffect, useState } from "react";
import Card from "../features/dashboard/Card";
import { useNavigate } from "react-router-dom";

const Dashboard = ({
  nav,
  shoppingList,
  activeUser,
  setActiveLists,
  archivedLists,
  setArchivedLists,
  showArchived,
}) => {
  const [lists, setLists] = useState(shoppingList);
  const navigate = useNavigate();

  const deleteShoppingList = (idToDelete) => {
    const updatedLists = lists.filter((list) => list.id !== idToDelete);
    setActiveLists(updatedLists);
  };

  const archiveShoppingList = (idToArchive) => {
    const listToArchive = lists.find((list) => list.id === idToArchive);
    if (listToArchive) {
      const updatedActiveLists = lists.filter(
        (list) => list.id !== idToArchive
      );
      setActiveLists(updatedActiveLists);
      setArchivedLists([...archivedLists, listToArchive]);
    }
  };

  useEffect(() => {
    setLists(shoppingList);
  }, [shoppingList]);

  useEffect(() => {
    if (!activeUser) {
      navigate("/login");
    }
  }, [activeUser, navigate]);

  const renderList = showArchived ? archivedLists : lists;

  return activeUser ? (
    <div
      className={
        nav
          ? "hidden"
          : "grid grid-cols-1 p-5 w-screen gap-4 justify-items-center  md:grid-cols-3 md:justify-items-center md:grid xl:grid-cols-4"
      }
    >
      {renderList.map((list) => (
        <Card
          key={list.id}
          list={list}
          activeUser={activeUser}
          onDelete={() => deleteShoppingList(list.id)}
          onArchive={() => archiveShoppingList(list.id)}
          showArchived={showArchived}
        />
      ))}
    </div>
  ) : null;
};

export default Dashboard;
