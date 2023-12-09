import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ showNav, setShowNav, setActiveUser }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-6 h-screen">
      <Header
        showNav={showNav}
        setShowNav={setShowNav}
        setActiveUser={setActiveUser}
      />
      {showNav && <Sidebar setActiveUser={setActiveUser} />}
      {showNav || <Outlet />}
    </div>
  );
};

export default Layout;
