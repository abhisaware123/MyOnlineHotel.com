import React from "react";
import { useState } from "react";
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currentElement) => {
      return currentElement.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Restaurants = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [uniqueMenu, setUniqueMenu] = useState(uniqueList);

  const filterItems = (timing) => {
      if (timing==="All") {
        setMenuData(Menu);
        return;          
      }
      const updatedlist = Menu.filter((currentElement) => {
      return currentElement.category === timing;
    });
    setMenuData(updatedlist);
  };

  return (
    <>
      <Navbar filterItems={filterItems} uniqueMenu={uniqueMenu} Menu={Menu} setMenuData={setMenuData} />
      
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurants;
