import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  return (
    <div class="flex items-center justify-center w-full">
      <label for="toogleA" class="flex items-center cursor-pointer">
        <div class="relative">
          <input id="toogleA" type="checkbox" class="sr-only" />

          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>

        <div class="ml-3 ">Dark Mode</div>
      </label>
    </div>
  );
};

export default DarkMode;
