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
import { useNavigation } from "@react-navigation/core";

const URL = "https://62c3d0d17d83a75e39e803f7.mockapi.io/api/v1/post";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  console.log(data);
  console.log(Object.keys(data).length);

  useEffect(() => {
    fetch(URL, { method: "GET" })
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

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

export default Home;
