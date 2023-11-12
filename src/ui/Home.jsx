import React from "react";
import Button from "./Button";

const Home = () => {
  return (
    <div className="flex flex-col h-[500px] justify-center items-center">
      <h1 className="text-3xl text-blue-600 p-6">Manage your Shopping</h1>
      <Button buttonLabel={"Get Started"} path={"/shoppinglist"} />
    </div>
  );
};

export default Home;
