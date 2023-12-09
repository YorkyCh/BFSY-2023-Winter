import React, { useState } from "react";
import Box from "../ui/Box";
import ShoppingCard from "../features/ShoppingLists/ShoppingCard";
import Modal from "../ui/Modal";
import CreateList from "../features/ShoppingLists/CreateList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "react-query";

const Dashboard = ({ activeUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const queryClient = useQueryClient();

  function notifyDelete() {
    toast.success("List Deleted .", {
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

  function notifyCreate() {
    toast.success("List Created .", {
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

  function notifyArchive() {
    toast.success("List Archived .", {
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

  function handleArchived() {
    queryClient.invalidateQueries("lists");
    setShowArchived(!showArchived);
  }

  return (
    <>
      <Box>
        <div className="flex justify-between mx-2 mt-2 md:justify-start md:ml-2 md:gap-2">
          <button onClick={handleArchived}>
            {showArchived ? "Active" : "Archived"}
          </button>
          <button onClick={() => setShowModal(true)}>Create New List</button>
        </div>
        <div className="grid grid-cols-2 auto-rows-auto px-2 gap-2 lg:grid-cols-4 ">
          <ShoppingCard
            notify={notifyDelete}
            activeUser={activeUser}
            showArchived={showArchived}
            notifyArchive={notifyArchive}
          />
        </div>
      </Box>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <CreateList
          setShowModal={setShowModal}
          notifyCreate={notifyCreate}
          activeUser={activeUser}
        />
      </Modal>
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

export default Dashboard;
