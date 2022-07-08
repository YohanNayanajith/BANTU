import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";

import Header from "../components/Header.component";
import { icons, SIZES, COLORS } from '../constans';

const Home = () => {
  return (
    <Header title={"BANTU.LK"} />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
