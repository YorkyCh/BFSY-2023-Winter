import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import DropDown from "./DropDown";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Form from "../features/dashboard/Form";

const Header = ({
  handleNav,
  nav,
  setActiveUser,
  shoppingList,
  addNewList,
  activeUser,
  setShowArchived,
  showArchived,
}) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  console.log(showArchived);

  return (
    <>
      <header className="w-screen h-[80px]">
        <div className="p-4 flex justify-between w-full h-full items-center">
          <div className="flex items-center gap-8">
            <Link to={""}>
              <h1 className="text-3xl font-bold text-blue-700 sm:text-4xl">
                Simple Shopping
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex pr-4 gap-2">
            {location.pathname === "/" && (
              <button onClick={() => setShowArchived(!showArchived)}>
                {showArchived ? "Active" : "Archived"}
              </button>
            )}
            {location.pathname === "/" && (
              <button onClick={() => setShowModal(true)}>Add</button>
            )}
            <button onClick={() => setActiveUser(null)}>Sign Out</button>
          </div>
          <div className="md:hidden" onClick={handleNav}>
            {!nav ? <HiBars3 size={25} /> : <HiMiniXMark size={25} />}
          </div>
        </div>
        {nav ? (
          <DropDown
            setActiveUser={setActiveUser}
            setShowArchived={setShowArchived}
            showArchived={showArchived}
            setShowModal={setShowModal}
          />
        ) : (
          ""
        )}
      </header>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Form
          shoppingList={shoppingList}
          addNewList={addNewList}
          activeUser={activeUser}
          setShowModal={setShowModal}
        />
      </Modal>
    </>
  );
};

export default Header;
