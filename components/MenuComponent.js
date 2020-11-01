import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const MenuComponent = ({ dishes, handleSelect }) => {
  const renderList = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        onPress={() => handleSelect(item.id)}
        hideChevron={true}
        leftAvatar={{ source: require("./images/uthappizza.png") }}
      />
    );
  };
  return (
    <FlatList
      data={dishes}
      renderItem={renderList}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MenuComponent;
