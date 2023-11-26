import getOwnerById from "../../services/getOwner";
import { Link } from "react-router-dom";

const Card = ({ list, activeUser, onDelete, onArchive, showArchived }) => {
  const owner = getOwnerById(list);

  return (
    <div className="flex flex-col border-2 border-blue-300 rounded-md">
      <Link to={`/list/${list.id}`}>
        <div className="w-[25rem] h-[8rem]  md:h-[9rem] md:w-[16rem] flex items-center justify-center">
          <div className="text-center">
            <h1 className="md:text-2xl font-bold">{list.name}</h1>{" "}
            <h1 className="md:text-xl">
              Owner:
              <span className="text-sm font-bold">
                {owner ? owner.name : "N/A"}
              </span>
            </h1>
          </div>
        </div>
      </Link>
      <div className="flex justify-center gap-4">
        {showArchived || (
          <button className="w-[5rem] self-center mb-2" onClick={onArchive}>
            Archive
          </button>
        )}
        {owner.id === activeUser.id && (
          <button className="w-[5rem] self-center mb-2" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
