import React from "react";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineHome,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navigation = ({ setActiveUser }) => {
  return (
    <ul className="mt-8 mx-[3rem]">
      <Link to={"/"}>
        <div className="flex  items-center justify-center gap-2">
          <HiOutlineHome size={25} />
          <li className="text-xl font-bold text-blue-800">Dashboard</li>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <button onClick={() => setActiveUser(null)}>LogOut</button>
        </div>
      </Link>
    </ul>
  );
};

export default Navigation;
