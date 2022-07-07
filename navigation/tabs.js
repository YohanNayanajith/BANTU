import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { isIphoneX } from "react-native-iphone-x-helper";

export const Tabs = () => {
  return (
    <View style={styles.container}>
      <Text>Home Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tabs;
