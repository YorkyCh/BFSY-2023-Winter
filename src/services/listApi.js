import axios from "axios";
const API_URL = "http://localhost:3000";

// lists

export function fetchLists() {
  return axios.get(`${API_URL}/shoppingLists/`).then((res) => res.data);
}

export function fetchList(id) {
  return axios.get(`${API_URL}/shoppingLists/${id}`).then((res) => res.data);
}

export function createList(list) {
  return axios.post(`${API_URL}/shoppingLists/`, list).then((res) => res.data);
}

export function deleteList(listID) {
  return axios
    .delete(`${API_URL}/shoppingLists/${listID}`)
    .then((res) => res.data);
}

export const getArchivedLists = function (state) {
  return async () => {
    try {
      const response = await axios.get(`${API_URL}/shoppingLists/`);
      const shoppingList = response.data;

      let filteredLists;
      if (state === "active") {
        filteredLists = shoppingList.filter((list) => !list.archived);
      } else if (state === "archived") {
        filteredLists = shoppingList.filter((list) => list.archived);
      } else {
        throw new Error("Invalid state");
      }

      return filteredLists;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };
};

export const archiveList = async (listID) => {
  try {
    // Fetch the shopping list
    const response = await axios.get(`${API_URL}/shoppingLists/${listID}`);
    const shoppingList = response.data;

    // Update the shopping list on the server with the new list (with the added item)
    await axios.put(`${API_URL}/shoppingLists/${listID}`, {
      ...shoppingList,
      archived: true,
    });

    console.log(`List ${listID} archived`);
  } catch (error) {
    console.error("Error archiving list:", error);
  }
};
// Items

export const removeItemFromList = async (listID, itemID) => {
  try {
    // Fetch the shopping list
    const response = await axios.get(`${API_URL}/shoppingLists/${listID}`);
    const shoppingList = response.data;

    // Find the index of the item in the listItems array
    const filteredItems = shoppingList.items.filter(
      (item) => item.id !== itemID
    );

    // Create a new shopping list object without the removed item
    const newShoppingList = { ...shoppingList, items: filteredItems };

    // Update the shopping list on the server with the new list (without the removed item)
    await axios.put(`${API_URL}/shoppingLists/${listID}`, newShoppingList);

    console.log(`Item ${itemID} removed from shopping list ${listID}`);
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

export async function addItemToList(listID, newItem) {
  try {
    // Fetch the shopping list
    const response = await axios.get(`${API_URL}/shoppingLists/${listID}`);
    const shoppingList = response.data;

    // Add the new item to the list
    const updatedItems = [...shoppingList.items, newItem];

    // Create a new shopping list object with the added item
    const newShoppingList = { ...shoppingList, items: updatedItems };

    // Update the shopping list on the server with the new list (with the added item)
    await axios.put(`${API_URL}/shoppingLists/${listID}`, newShoppingList);

    console.log(`Item added to shopping list ${listID}`);
  } catch (error) {
    console.error("Error adding item:", error);
  }
}

// Members

export const removeMemberFromList = async (listID, memberID) => {
  try {
    const response = await axios.get(`${API_URL}/shoppingLists/${listID}`);
    const shoppingList = response.data;

    const filteredMembers = shoppingList.members.filter(
      (member) => member.id !== memberID
    );

    const newShoppingList = { ...shoppingList, members: filteredMembers };

    await axios.put(`${API_URL}/shoppingLists/${listID}`, newShoppingList);

    console.log(`Member ${memberID} removed from shopping list ${listID}`);
  } catch (error) {
    console.error("Error removing member:", error);
  }
};

export async function addMemberToList(listID, newMember) {
  try {
    const response = await axios.get(`${API_URL}/shoppingLists/${listID}`);
    const shoppingList = response.data;

    const updatedMembers = [...shoppingList.members, newMember];

    const newShoppingList = { ...shoppingList, members: updatedMembers };

    await axios.put(`${API_URL}/shoppingLists/${listID}`, newShoppingList);

    console.log(`Member added to shopping list ${listID}`);
  } catch (error) {
    console.error("Error adding member:", error);
  }
}
