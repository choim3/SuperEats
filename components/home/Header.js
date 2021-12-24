import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({ activeTab, setActiveTab }) {
  return (
    <View style={styles.header}>
      <HeaderButton
        text="Delivery"
        // btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        // btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  //   btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? "black" : "white",
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 7,
      }}
      onPress={() => {
        setActiveTab(text);
      }}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignSelf: "center",
  },
  //   buttons: {
  //     backgroundColor: "black",
  //     borderRadius: 25,
  //     paddingHorizontal: 15,
  //     paddingVertical: 7,
  //   },
  //   text: {
  //     fontSize: 15,
  //     fontWeight: "900",
  //   },
});
