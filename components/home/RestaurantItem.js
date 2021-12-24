import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { View, Text, Image, TouchableOpacity } from "react-native";

//Fix how everything gets highlighted when clicking to scroll

//passing in Yelp API data as a prop
export default function RestaurantItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 15 }}>
      {props.restaurantsData.map((restaurant, idx) => (
        <TouchableOpacity activeOpacity={0.7}>
          <View
            style={{ marginTop: 15, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage restaurant={restaurant} />
            <RestaurantInfo restaurant={restaurant} />
          </View>
        </TouchableOpacity>
      ))}
    </TouchableOpacity>
  );
}
const RestaurantImage = ({ restaurant }) => (
  <>
    <Image
      key={1}
      source={{
        uri: restaurant.image_url,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ restaurant }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {restaurant.name}
      </Text>
      <Text style={{ fontSize: 13, color: "grey", paddingTop: 5 }}>
        30-35 Minutes
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        borderRadius: "20",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{restaurant.rating}</Text>
    </View>
  </View>
);

export const localRestaurants = [
  {
    name: "Koibito Japanese Restaurant",
    image_url:
      "https://mediacloud.theweek.co.uk/image/private/s--gsxRMkkv--/f_auto,t_primary-image-mobile@1/v1604769332/theweek/2018/03/wsp_0881.jpg",
    categeories: ["japanese", "sushi"],
    price: "$$$",
    rating: 4.9,
  },
  {
    name: "Crab Pot",
    image_url:
      "https://p300-americantownscom.netdna-ssl.com/img/article/wa-crab-1.jpg",
    categeories: ["Seafood"],
    price: "$$",
    rating: 4.2,
  },
  {
    name: "Shaburina",
    image_url:
      "https://www.discoverlosangeles.com/sites/default/files/images/2019-03/Little%20Sheep%20Mongolian%20Hot%20Pot%20Pasadena.jpg?width=1600&height=686&fit=crop&quality=78&auto=webp",
    categeories: ["Japanese"],
    price: "$$",
    rating: 4.1,
  },
  {
    name: "Magiannos",
    image_url:
      "https://cdn.vox-cdn.com/thumbor/sPRfYXZ8Gq2cY8yuuO1NjQjmVac=/0x0:5184x3456/1200x800/filters:focal(2178x1314:3006x2142)/cdn.vox-cdn.com/uploads/chorus_image/image/63268725/shutterstock_314337134.0.0.0.0.jpg",
    categeories: ["Italian"],
    price: "$$",
    rating: 4.6,
  },
  {
    name: "Din Tai Fung",
    image_url:
      "https://americanaatbrand.com/wp-content/uploads/2017/05/AAB_DinTaiFung_NewDiningPageImage-2_900x600.jpg",
    categeories: ["Chinese"],
    price: "$",
    rating: 3.2,
  },
];
