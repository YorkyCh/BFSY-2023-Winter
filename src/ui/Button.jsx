import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onClick, buttonLabel, path }) => {
  return (
    <Link to={path}>
      <button
        className="text-white bg-blue-600 text-lg rounded-md px-2"
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </Link>
  );
};

export default Button;
