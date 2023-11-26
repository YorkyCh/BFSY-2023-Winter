import { useLocation } from "react-router-dom";

const DropDown = ({
  setActiveUser,
  setShowArchived,
  showArchived,
  setShowModal,
}) => {
  const location = useLocation();

  return (
    <>
      <ul className=" w-full px-8">
        <li className="flex justify-center my-3">
          {location.pathname === "/" && (
            <button
              onClick={() => setShowArchived(!showArchived)}
              className="w-[12rem]"
            >
              {showArchived ? "Active" : "Archived"}
            </button>
          )}
        </li>
        <li className="flex justify-center">
          {location.pathname === "/" && (
            <button onClick={() => setShowModal(true)} className="w-[12rem]">
              Add
            </button>
          )}
        </li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3" onClick={() => setActiveUser(null)}>
            Sign Out
          </button>
        </div>
      </ul>
    </>
  );
};

export default DropDown;
