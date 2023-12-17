import React from "react";
import Navigation from "./Navigation";

const Sidebar = ({ setActiveUser, setShowNav }) => {
  return (
    <div className="row-span-2 col-span-4 md:row-span-3  shadow-md shadow-gray-400 lg:block lg:row-span-5 lg:col-span-1 ">
      <Navigation setActiveUser={setActiveUser} setShowNav={setShowNav} />
    </div>
  );
};

export default Sidebar;
