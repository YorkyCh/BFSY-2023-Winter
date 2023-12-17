import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useLanguage } from "../data/LanguageContext";
import translations from "../data/translations";

const Navigation = ({ setActiveUser, setShowNav }) => {
  const { language } = useLanguage();

  function handleNav() {
    setShowNav(false);
  }

  // Translations
  const logout = translations[language].logout;
  const dashboard = translations[language].dashboard;

  return (
    <ul className="mt-8 mx-[3rem]">
      <Link to={"/"} onClick={handleNav}>
        <div className="flex  items-center justify-center gap-2">
          <HiOutlineHome size={25} className="dark:text-white" />
          <li className="text-xl font-bold text-blue-800">{dashboard}</li>
        </div>
      </Link>
      <div className="mt-5 flex justify-center items-center">
        <button onClick={() => setActiveUser(null)}>{logout}</button>
      </div>
    </ul>
  );
};

export default Navigation;
