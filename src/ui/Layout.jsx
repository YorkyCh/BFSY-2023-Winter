import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({
  nav,
  handleNav,
  setActiveUser,
  shoppingList,
  addNewList,
  activeUser,
  setShowArchived,
  showArchived,
}) => {
  return (
    <div>
      <Header
        handleNav={handleNav}
        nav={nav}
        setActiveUser={setActiveUser}
        shoppingList={shoppingList}
        addNewList={addNewList}
        activeUser={activeUser}
        setShowArchived={setShowArchived}
        showArchived={showArchived}
      />
      <main className="flex flex-col h-full">
        <Outlet nav={nav} />
      </main>
    </div>
  );
};

export default Layout;
