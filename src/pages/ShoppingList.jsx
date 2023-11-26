import { useNavigate } from "react-router-dom";
import List from "../features/lists/List";
import MembersList from "../features/members/MembersList";
import { useEffect } from "react";

const ShoppingList = ({
  nav,
  shoppingList,
  activeUser,
  setShoppingList,
  showArchived,
  archivedLists,
  setArchivedLists,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeUser) {
      navigate("/login");
    }
  }, [activeUser, navigate]);

  return (
    <div className={nav ? "hidden" : "flex flex-col"}>
      <div className="flex justify-center">
        <button>Press</button>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 justify-items-center md:grid-cols-2 ">
        <List
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
          showArchived={showArchived}
          archivedLists={archivedLists}
          setArchivedLists={setArchivedLists}
        />
        <MembersList
          shoppingList={shoppingList}
          showArchived={showArchived}
          archivedLists={archivedLists}
          setArchivedLists={setArchivedLists}
        />
      </div>
    </div>
  );
};

export default ShoppingList;
