import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ShoppingList from "./pages/ShoppingList";
import Layout from "./ui/Layout";
import data from "./data/data";
import LogIn from "./pages/LogIn";

const App = () => {
  const [nav, setNav] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [activeLists, setActiveLists] = useState(data);
  const [archivedLists, setArchivedLists] = useState([]);
  const [showArchived, setShowArchived] = useState(false);
  console.log(archivedLists);

  function handleNav() {
    setNav(!nav);
  }

  function addNewList(newList) {
    setActiveLists([...activeLists, newList]);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              nav={nav}
              shoppingList={activeLists}
              handleNav={handleNav}
              setActiveUser={setActiveUser}
              addNewList={addNewList}
              activeUser={activeUser}
              setShowArchived={setShowArchived}
              showArchived={showArchived}
            />
          }
        >
          <Route
            path="/"
            element={
              <Dashboard
                nav={nav}
                shoppingList={activeLists}
                activeUser={activeUser}
                setActiveLists={setActiveLists}
                archivedLists={archivedLists}
                setArchivedLists={setArchivedLists}
                showArchived={showArchived}
              />
            }
          />
          <Route
            path="/list/:id"
            element={
              <ShoppingList
                nav={nav}
                shoppingList={activeLists}
                activeUser={activeUser}
                setShoppingList={setActiveLists}
                archivedLists={archivedLists}
                showArchived={showArchived}
                setArchivedLists={setArchivedLists}
              />
            }
          />
        </Route>
        <Route
          path="login"
          element={<LogIn setActiveUser={setActiveUser} data={activeLists} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
