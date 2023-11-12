import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleLogOut }) => {
  return (
    <div className="p-6 text-blue-600 text-4xl font-bold flex flex-row justify-between">
      <Link>
        <h1>Simple Shopping</h1>
      </Link>
    </div>
  );
};

export default Navbar;
