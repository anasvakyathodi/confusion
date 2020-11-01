import React from "react";
import { Card } from "react-native-elements";
import { View, Text } from "react-native";
const DishDetailComponent = ({ dish }) => {
  const RenderItem = ({ dish }) => {
    if (dish != null) {
      return (
        <Card
          featuredTitle={dish.name}
          image={require("./images/uthappizza.png")}
        >
          <Text> {dish.description}</Text>
        </Card>
      );
    } else {
      return (
        <View>
          <Text>No Item Selected</Text>
        </View>
      );
    }
  };

  return <RenderItem dish={dish} />;
};

export default DishDetailComponent;
