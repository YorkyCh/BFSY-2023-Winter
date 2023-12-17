import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useLanguage } from "../data/LanguageContext";

const Layout = ({ showNav, setShowNav, setActiveUser }) => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    switchLanguage(newLanguage);
  };
  return (
    <div className="grid grid-cols-4 grid-rows-6 h-screen dark:bg-black ">
      <Header
        showNav={showNav}
        setShowNav={setShowNav}
        setActiveUser={setActiveUser}
        handleLanguageChange={handleLanguageChange}
      />
      {showNav && (
        <Sidebar setActiveUser={setActiveUser} setShowNav={setShowNav} />
      )}
      {showNav || <Outlet />}
    </div>
  );
};

export default Layout;
