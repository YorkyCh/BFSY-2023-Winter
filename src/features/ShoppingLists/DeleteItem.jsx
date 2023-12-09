import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { removeItemFromList } from "../../services/listApi";

const DeleteItem = ({ itemId }) => {
  const params = useParams();
  const listId = params.id;
  const queryClient = useQueryClient();

  const mutation = useMutation(() => removeItemFromList(listId, itemId), {
    onSuccess: () => {
      // Invalidate the query for the shopping list items after deletion
      console.log("Item deleted successfully!");

      queryClient.invalidateQueries("list");
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  return (
    <HiOutlineArchiveBoxXMark
      size={25}
      className="cursor-pointer"
      onClick={handleDelete}
    />
  );
};

export default DeleteItem;
