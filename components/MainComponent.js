import React, { useState } from "react";
import MenuComponent from "./MenuComponent";
import { DISHES } from "./../shared/Dishes";
import { View, StyleSheet } from "react-native";
import DishDetailComponent from "./DishDetailComponent";
const MainComponent = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <View style={styles.flexStyle}>
      <DishDetailComponent
        style={styles.flexStyle}
        dish={DISHES.filter((item) => item.id === selectedDish)[0]}
      />
      <MenuComponent
        style={styles.flexStyle}
        dishes={DISHES}
        handleSelect={setSelectedDish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
});

export default MainComponent;
