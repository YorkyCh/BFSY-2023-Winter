import React from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../../ui/Item";
import Member from "../../ui/Member";
import { useQuery } from "react-query";
import { fetchList } from "../../services/listApi";
import AddItem from "./AddItem";
import AddMember from "./AddMember";
import { ToastContainer, toast } from "react-toastify";

const ShoppingDetails = ({ activeUser }) => {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError } = useQuery("list", () => fetchList(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching shopping lists</div>;
  }

  const members = data?.members.filter((member) => member.role === "Member");

  function notify() {
    toast.error("User is already a member of the list.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:auto-rows-auto w-screen h-[36rem] ">
        <div className="flex items-center col-span-2">
          <div className="grid grid-cols-2 w-full">
            <h1 className="pt-4 text-2xl font-bold text-blue-800 text-center flex self-center mb-4 md:ml-20">
              {data.name}
            </h1>
          </div>
        </div>

        {/* Items  */}

        <div className="w-[80%] justify-self-center row-span-5 col-span-2 md:col-span-1 my-4 border-gray-400 border-[2px] rounded-md overflow-y-auto dark:bg-gray-600 dark:text-gray-400">
          <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
            {/* div */}
            <AddItem />

            {data.items.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                itemId={item.id}
              />
            ))}
          </div>
        </div>

        {/* Members  */}

        <div className="w-[80%] justify-self-center row-span-5 md:col-span-1  col-span-2 my-4 border-gray-400 border-[2px] rounded-md overflow-y-auto dark:bg-gray-600 dark:text-gray-400">
          <div className="flex flex-col gap-2 md:grid md:grid-cols-3">
            <h1 className="flex col-span-3 justify-center font-bold text-lg mt-2">
              {data.members.find((member) => member.role === "Owner").name}
            </h1>
            {/* div */}
            <AddMember
              owner={data.members.find((member) => member.role === "Owner")}
              membersList={data.members}
              notify={notify}
            />

            {members.map((member) => (
              <Member
                key={member.id}
                name={member.name}
                memberId={member.id}
                activeUser={activeUser}
                owner={data.members.find((member) => member.role === "Owner")}
              />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ShoppingDetails;
