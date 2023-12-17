import React from "react";
import { Link } from "react-router-dom";
import DeleteList from "../features/ShoppingLists/DeleteList";
import { useMutation, useQueryClient } from "react-query";
import { archiveList } from "../services/listApi";
import { useLanguage } from "../data/LanguageContext";
import translations from "../data/translations.json";

const ShoppingListCard = ({
  name,
  owner,
  listId,
  notify,
  activeUser,
  notifyArchive,
  archived,
}) => {
  const queryClient = useQueryClient();
  const { language } = useLanguage();

  const mutation = useMutation(() => archiveList(listId), {
    onSuccess: () => {
      // Invalidate the query for the shopping list items after deletion
      notifyArchive();
      queryClient.invalidateQueries("lists");
    },
    onError: (error) => {
      console.error("Error deleting list:", error);
    },
  });

  const handleArchive = () => {
    mutation.mutate();
  };

  // translations
  const ownerLabel = translations[language].owner;
  const btnArchive = translations[language].btnArchive;

  return (
    <div className="flex flex-col mt-2 border-blue-600 rounded-md border-[2px] shadow-md shadow-blue-300 hover:shadow-blue-500 hover:shadow-lg dark:shadow-sm dark:text-white">
      <Link to={`/list/${listId}`}>
        <div className="justify-self-start cursor-pointer ml-2">
          <h1 className="font-bold text-xl">{name}</h1>
          <h1>
            {ownerLabel}: {owner.name}
          </h1>
        </div>
      </Link>
      <div className="flex pb-2 md:p-2 md:gap-4">
        {owner.id === activeUser.id && (
          <DeleteList listId={listId} notify={notify} />
        )}

        {archived || <button onClick={handleArchive}>{btnArchive}</button>}
      </div>
    </div>
  );
};

export default ShoppingListCard;
