import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setActiveUser, data }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const allMembers = data.flatMap((list) => list.members);
  const navigate = useNavigate();
  console.log(allMembers);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = allMembers.find(
      (member) => member.email === email && member.password === password
    );

    if (user) {
      setActiveUser(user);
      navigate("/");
      console.log("Login successful!");
    } else {
      console.log("Login failed. Invalid credentials.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-screen h-screen items-center flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 w-[24rem] h-[14rem] border-blue-400 border-2 rounded-lg"
      >
        <h1 className="p-2 text-xl font-bold">Login</h1>
        <input
          id="email"
          value={email}
          placeholder="email"
          type="text"
          className="border-blue-400 border-2 rounded-lg text-center"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          value={password}
          placeholder="password"
          type="password"
          className="border-blue-400 border-2 rounded-lg text-center"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
