import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { removeMemberFromList } from "../../services/listApi";

const DeleteMember = ({ memberId }) => {
  const params = useParams();
  const listId = params.id;
  const queryClient = useQueryClient();

  const mutation = useMutation(() => removeMemberFromList(listId, memberId), {
    onSuccess: () => {
      console.log("Member deleted successfully!");

      // Invalidate the query for the shopping list items after deletion
      queryClient.invalidateQueries("list");
    },
    onError: (error) => {
      console.error("Error deleting member:", error);
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

export default DeleteMember;
