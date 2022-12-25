import React from "react";
import logo from "../../../ASSETS/IMAGES/logo.png";
import Cart from "../CART/Cart";
import Menu from "../MENU/Menu";
import Search from "../SEARCH/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarSection shadow py-2 md:px-4 px-4">
      <div className="navbarContent container mx-auto">
        <div className="navbar grid grid-cols-2 ">
          <div className="left flex items-center">
            <div className="logo pr-10">
              <img width={40} src={logo} alt="" />
            </div>
            <div className="menus md:block hidden	">
              <ul className="flex font-medium text-md">
                <li>Home</li>
                <li className="pl-5">Categories</li>
                <li className="pl-5">Favourites</li>
              </ul>
            </div>
          </div>
          <div className="right flex justify-end items-center">
            <ul className="flex items-center font-medium text-md">
              <li className="searchProduct">
                <Search></Search>
              </li>
              <li className="pl-5">
                <Cart></Cart>
              </li>
              <li className="pl-5">
                <Menu></Menu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
