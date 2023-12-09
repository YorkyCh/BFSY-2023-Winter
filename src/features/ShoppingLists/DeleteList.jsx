import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteList } from "../../services/listApi";

const DeleteList = ({ listId, notify }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteList(listId), {
    onSuccess: () => {
      // Invalidate the query for the shopping list items after deletion
      notify();
      queryClient.invalidateQueries("lists");
    },
    onError: (error) => {
      console.error("Error deleting list:", error);
    },
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteList;
