import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import Header from "../components/Header.component";
import SearchComponent from "../components/Search.component";
import HorizontalScroll from "../components/HorizontalScroll.component";
import ImageView from "../components/ImageView.component";
import LatestPost from "../components/LatestPost.component";
const { height, width } = Dimensions.get("window");
import { Divider } from "@react-native-material/core";

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"BANTU.LK"} />

      <SearchComponent />

      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 20 }}>
          <HorizontalScroll title={"CATEGORY"} />
          {/* <Divider style={{ marginTop: 60 }} leadingInset={16} />; */}
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            {/* <Text style={{ fontSize: 24, fontWeight: "700" }}>
              Introducing Airbnb Plus
            </Text>
            <Text style={{ fontWeight: "100", marginTop: 10 }}>
              A new selection of homes verified for quality & comfort
            </Text> */}
            <ImageView />
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text
            style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
          >
            LATEST POSTS
          </Text>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <LatestPost
              width={width}
              name="The Cozy Place"
              type="PRIVATE ROOM - 2 BEDS"
              price={82}
              rating={4}
            />
            <LatestPost
              width={width}
              name="The Cozy Place"
              type="PRIVATE ROOM - 2 BEDS"
              price={82}
              rating={4}
            />
            <LatestPost
              width={width}
              name="The Cozy Place"
              type="PRIVATE ROOM - 2 BEDS"
              price={82}
              rating={4}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
