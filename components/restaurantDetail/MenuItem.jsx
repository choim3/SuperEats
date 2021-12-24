import React from "react";
import { View, Text, Image } from "react-native";

export default function MenuItem() {
  return (
    <View>
      <ItemName name={foodName} />
      <ItemInfo info={foodInfo} />
      <ItemPrice price={foodPrice} />
      <ItemImage image={foodImg} />
    </View>
  );
}

const ItemName = ({ name }) => <Text>{name}</Text>;

const ItemInfo = ({ info }) => <Text>{info} </Text>;

const ItemPrice = ({ price }) => <Text>{price} </Text>;

const ItemImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "30%", height: 100 }} />
);

const foodName = "House Miso";
const foodInfo = "Miso but from the house, ya know?";
const foodPrice = "$10.99";
const foodImg =
  "https://www.crowdedkitchen.com/wp-content/uploads/2020/08/vegan-miso-soup.jpg";
