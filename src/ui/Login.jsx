import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../services/userApi";

const LogIn = ({ setActiveUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchUser(email, password)
      .then((user) => {
        setActiveUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="w-screen h-screen items-center flex justify-center dark:bg-black dark:text-white">
      <form
        className="flex flex-col items-center gap-5 w-[24rem] h-[14rem] border-blue-400 border-2 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="p-2 text-xl font-bold">Login</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="bg-blue-200 text-center rounded-md dark:text-gray-600"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="bg-blue-200 text-center rounded-md dark:text-gray-600"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-500 ">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
