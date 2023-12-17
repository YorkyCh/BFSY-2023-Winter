import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useLanguage } from "../data/LanguageContext";
import translations from "../data/translations";

const Header = ({
  showNav,
  setShowNav,
  setActiveUser,
  handleLanguageChange,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // // // Translations
  const logout = translations[language].logout;

  return (
    <div className="col-span-4 row-span-1 border-gray-300 border-b-[1px] flex items-center justify-between p-2 lg:px-8 dark:border-gray-600">
      <Link to={"/"}>
        <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl">
          Simple Shopping
        </h1>
      </Link>
      <div className="flex gap-1 md:gap-4">
        <div className="flex ">
          <select
            id="language-select"
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="rounded-lg dark:bg-gray-600 dark:text-white"
          >
            <option value="en">English</option>
            <option value="cz">Czech</option>
          </select>
        </div>
        <button className="hidden lg:block" onClick={() => setActiveUser(null)}>
          {logout}
        </button>
        {darkMode ? (
          <IoSunnyOutline
            size={35}
            className="cursor-pointer text-blue-400"
            onClick={toggleDarkMode}
          />
        ) : (
          <IoMoonOutline
            size={35}
            className="cursor-pointer text-blue-600"
            onClick={toggleDarkMode}
          />
        )}
        <HiBars3BottomLeft
          size={35}
          className="lg:hidden cursor-pointer dark:text-white"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
    </div>
  );
};

export default Header;
