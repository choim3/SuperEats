import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import Header from "../components/home/Header";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY = `RMLSIwjD6N8NfiKiv3avvp7Ma28S2Wr-tJUoO10yqW1F2cBMSNXVD39wx-cF9LCiIv-YkDeCo4hHnpm_zyH1vwTE86oYL5R6Z0R7M6AeJO7Ramh2ug_IKzh6x76uYXYx`;

export default function Home() {
  // sets seed/fake data to be default data if API data isn't loaded
  const [restaurantsData, setRestaurantsData] = useState([localRestaurants]);
  const [city, setCity] = useState("Seattle");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((data) =>
        setRestaurantsData(
          data.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantsData={restaurantsData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
