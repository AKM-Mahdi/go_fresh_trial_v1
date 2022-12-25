import React from "react";
import DarkMode from "../DARK_MODE_SWITCH/DarkMode";

const Topbar = () => {
  return (
    <div className="bg-teal-50 py-2 md:px-4 px-4">
      <div className=" container mx-auto">
        <ul className="flex justify-end text-sm font-medium text-black">
          <li className="md:pl-8 pl-2">
            <DarkMode></DarkMode>
          </li>
          <li className="md:pl-8 pl-2">English</li>
          <li className=" sm:pl:2 md:pl-8 pl-2">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
