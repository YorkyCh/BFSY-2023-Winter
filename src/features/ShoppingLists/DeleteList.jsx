import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteList } from "../../services/listApi";
import { useLanguage } from "../../data/LanguageContext";
import translations from "../../data/translations.json";

const DeleteList = ({ listId, notify }) => {
  const queryClient = useQueryClient();
  const { language } = useLanguage();

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

  // translations
  const btnDelete = translations[language].btnDelete;

  return <button onClick={handleDelete}>{btnDelete}</button>;
};

export default DeleteList;
