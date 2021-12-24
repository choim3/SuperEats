import React from "react";
import { View, Text, Image } from "react-native";

const imageurl =
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/03/18/0/FNK_HOT_POT_AT_HOME_OPENER_H_f_s4x3.jpg.rend.hgtvcom.616.493.suffix/1616107469470.jpeg";
const title = "Shaburina";
const desc = "Japanese * Hotpot   $$$   4 Stars(2913)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={imageurl} />
      <RestaurantTitle title={title} />
      <RestaurantDescription desc={desc} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 30,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 10,
    }}
  >
    {title}
  </Text>
);

const RestaurantDescription = ({ desc }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 8,
      fontSize: 15,
      fontWeight: "400",
    }}
  >
    {" "}
    {desc}{" "}
  </Text>
);
