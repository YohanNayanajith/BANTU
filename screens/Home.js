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
import { icons, COLORS, SIZES } from "../constans";
import Cookies from "js-cookie";

const URL = "https://62c3d0d17d83a75e39e803f7.mockapi.io/api/v1/post";
const token = Cookies.get("token");

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const navigation = useNavigation();

  // console.log(data);
  // console.log(Object.keys(data).length);;
  console.log("Dan me token eka");
  console.log(token);

  //categories
  useEffect(() => {
    const check = async () => {
      try {
        let response = await fetch(
          "http://192.168.8.187:5000/api/v1/category",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              token: `Bearer ${token}`,
            },
          }
        );

        let result = await response.json();
        setCategoryData(result);
      } catch (err) {
        console.log("Something Worng");
      }
    };
    check();
  }, []);

  //latest post
  useEffect(() => {
    const check1 = async () => {
      try {
        let response = await fetch("http://192.168.8.187:5000/api/v1/post", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: `Bearer ${token}`,
          },
        });

        let result = await response.json();
        setData(result);
      } catch (err) {
        console.log("Something Worng");
      }
    };
    check1();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
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
            style={{
              fontSize: SIZES.mobileHeading,
              fontWeight: "700",
              paddingHorizontal: 20,
            }}
          >
            LATEST POSTS
          </Text>
          {isLoading && data.isApproved === 0 ? (
            <ActivityIndicator />
          ) : (
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
                name={data.postTitle}
                type={data.postDetail}
                date={data.date}
                time={data.time}
                price={data.price}
                rating={4}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
