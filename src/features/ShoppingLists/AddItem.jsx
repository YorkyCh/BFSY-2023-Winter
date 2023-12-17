import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addItemToList } from "../../services/listApi";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import translations from "../../data/translations.json";
import { useLanguage } from "../../data/LanguageContext";

const AddItem = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const params = useParams();
  const listID = params.id;
  const queryClient = useQueryClient();
  const { language } = useLanguage();

  const mutation = useMutation((newItem) => addItemToList(listID, newItem), {
    onSuccess: () => {
      console.log("Item added successfully!");
      queryClient.invalidateQueries("list");

      // You can perform any action after a successful mutation
    },
    onError: (error) => {
      console.error("Error adding item:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      name: item,
      quantity: parseInt(quantity),
      archived: false,
    };

    // Submit the newItem object to a function for further processing
    mutation.mutate(newItem);

    setItem("");
    setQuantity("");
  };

  // translations

  const btnAdd = translations[language].btnAdd;
  const itemTranslations = translations[language].item;
  const quantityTranslations = translations[language].quantity;

  return (
    <div className="md:col-span-2 p-2 ">
      <form className="lg:flex-row flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={itemTranslations}
          className="bg-gray-100 rounded-md text-center"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="number"
          placeholder={quantityTranslations}
          className="bg-gray-100 rounded-md text-center"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded-md px-4"
          type="submit"
        >
          {btnAdd}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
