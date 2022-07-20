import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.component";
import SearchComponent from "../components/Search.component";
import HorizontalScroll from "../components/HorizontalScroll.component";
import ImageView from "../components/ImageView.component";
import LatestPost from "../components/LatestPost.component";
const { height, width } = Dimensions.get("window");
// import { Divider } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/core";
import { icons, COLORS, SIZES } from "../constans";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const URL = "http://192.168.8.187:5000/api/v1/category";
const URL1 = "http://192.168.8.187:5000/api/v1/post";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const authToken = useSelector((state) => state.login.authToken);
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const navigation = useNavigation();

  // const token = loginData.token;
  // console.log(authToken);
  let token = "Bearer " + authToken;
  // console.log(token);

  // const data = {
  //   postTitle: "Yohan",
  //   postDetail: "Yohan",
  //   date: "2022-07-18",
  //   time: "Yohan",
  //   price: 25,
  // };

  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        // console.log(json);
        setCategoryData(json);

        fetch(URL1, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        })
          .then((response) => response.json()) // get response, convert to json
          .then((json) => {
            console.log(json);
            setData(json);
          })
          .catch((error) => alert(error)) // display errors
          .finally(() => setLoading(false)); // change loading state
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setCategoryLoading(false)); // change loading state
  }, []);

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
      let json = await response.json();
      setCategoryData(json);
      setCategoryLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  // useEffect(() => {

  // }, []);

  // Also get call asynchronous function
  async function getPostAsync() {
    try {
      let response = await fetch(URL1, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
      let json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  // const fetchCategoryData = async (url) => {
  //   try {
  //     let response = await fetch(
  //       url,
  //       {
  //         method: "GET",
  //         headers: {
  //           // Accept: "application/json",
  //           "Content-Type": "application/json",
  //           token: token,
  //         },
  //         // body: JSON.stringify({}),
  //       }
  //     );

  //     let result = await response.json();

  //     setCategoryData(result);
  //     setCategoryLoading(true);
  //     console.log("Data enne na");
  //     console.log(categoryData);
  //     return result;
  //   } catch (err) {
  //     console.log("Something Worng");
  //   }
  // };

  //categories
  // useEffect(() => {
  //   let url = "http://192.168.8.187:5000/api/v1/category";
  //   fetchCategoryData(url);
  // }, [props.id]);

  //latest post
  // useEffect(() => {
  //   const check1 = async () => {
  //     try {
  //       let response = await fetch("http://192.168.8.187:5000/api/v1/post", {
  //         method: "GET",
  //         headers: {
  //           // Accept: "application/json",
  //           "Content-Type": "application/json",
  //           "token": token,
  //         },
  //         // body: JSON.stringify({})
  //       });

  //       let result = await response.json();
  //       setData(result);
  //       setLoading(false);
  //       console.log(result);
  //     } catch (err) {
  //       console.log("Something Worng");
  //     }
  //   };
  //   check1();
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <Header title={"BANTU.LK"} />

      <SearchComponent />

      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 20 }}>
          {categoryLoading ? (
            <ActivityIndicator />
          ) : (
            <HorizontalScroll title={"CATEGORY"} data={categoryData} />
          )}

          {/* <HorizontalScroll title={"CATEGORY"} data={categoryData} /> */}

          {/* <Divider style={{ marginTop: 60 }} leadingInset={16} />; */}
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
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
          // {isLoading ? (
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
              {data.map((item) => {
                return (
                  <LatestPost
                    key={item._id}
                    width={width}
                    name={item.postTitle}
                    type={item.postDetail}
                    date={item.date}
                    time={item.time}
                    price={item.price}
                    rating={4}
                  />
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
