import React from "react";
import Layout from "./ui/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import ShoppingList from "./features/shoppingList/ShoppingList";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shoppinglist",
        element: <ShoppingList />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
