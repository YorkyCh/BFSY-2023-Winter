import React from "react";
import Navigation from "./Navigation";

const Sidebar = ({ setActiveUser }) => {
  return (
    <div className="row-span-2 col-span-4 md:row-span-3 border-r-[1px] border-gray-300 shadow-xl shadow-gray-400 lg:block lg:row-span-5 lg:col-span-1">
      <Navigation setActiveUser={setActiveUser} />
    </div>
  );
};

export default Sidebar;
