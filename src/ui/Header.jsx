import React from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Header = ({ showNav, setShowNav, setActiveUser }) => {
  return (
    <div className="col-span-4 row-span-1 border-gray-300 border-b-[1px] flex items-center justify-between p-2 lg:px-8">
      <Link to={"/"}>
        <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl">
          Simple Shopping
        </h1>
      </Link>
      <button className="hidden lg:block" onClick={() => setActiveUser(null)}>
        LogOut
      </button>

      <HiBars3BottomLeft
        size={25}
        className="lg:hidden cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      />
    </div>
  );
};

export default Header;
