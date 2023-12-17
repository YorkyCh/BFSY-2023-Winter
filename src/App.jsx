import { ReactQueryDevtools } from "react-query/devtools";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./ui/Layout";
import Dashboard from "./pages/Dashboard";
import ShoppingListDetails from "./pages/ShoppingListDetails";
import LogIn from "./ui/Login";
import { LanguageProvider } from "./data/LanguageContext";

const queryClient = new QueryClient();

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            {/* check if activeUser is null */}
            <Route
              path="/"
              element={
                !activeUser ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Layout
                    showNav={showNav}
                    setShowNav={setShowNav}
                    setActiveUser={setActiveUser}
                  />
                )
              }
            >
              {/* Nested Routes */}
              <Route index element={<Dashboard activeUser={activeUser} />} />
              <Route
                path="/list/:id"
                element={<ShoppingListDetails activeUser={activeUser} />}
              />
            </Route>
            {/* Login Route */}
            <Route
              path="login"
              element={
                <LogIn activeUser={activeUser} setActiveUser={setActiveUser} />
              }
            />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
