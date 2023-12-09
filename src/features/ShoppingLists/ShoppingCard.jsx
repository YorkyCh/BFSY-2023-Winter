import React from "react";
import { getArchivedLists } from "../../services/listApi";
import { useQuery } from "react-query";
import ShoppingListCard from "../../ui/ShoppingListCard";

const ShoppingCard = ({ notify, activeUser, showArchived, notifyArchive }) => {
  const { data, isLoading, isError } = useQuery(
    "lists",
    getArchivedLists(showArchived ? "archived" : "active"),
    {
      refetchInterval: 1500,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching shopping lists</div>;
  }

  return (
    <>
      {data.map((list) => {
        const owner = list.members.find((member) => member.role === "Owner");
        return (
          <ShoppingListCard
            key={list.id}
            name={list.name}
            archived={list.archived}
            owner={owner}
            listId={list.id}
            notify={notify}
            activeUser={activeUser}
            notifyArchive={notifyArchive}
          />
        );
      })}
      {data.length === 0 && <h1>No lists</h1>}
    </>
  );
};

export default ShoppingCard;
