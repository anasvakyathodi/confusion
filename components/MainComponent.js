import React from "react";
import MenuComponent from "./MenuComponent";
import { DISHES } from "./../shared/Dishes";
const MainComponent = () => {
  return <MenuComponent dishes={DISHES} />;
};

export default MainComponent;
