import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Cookies from "js-cookie";
import axios from "axios";
import Header from "../components/Header.component";
import Placeholder from "../components/Placeholder.component";
import { icons, COLORS, SIZES, FONTS } from "../constans";
import TextDetail from "../components/TextDetail.component";
import HeaderWithBack from "../components/HeaderWithBack.component";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

const Profile = () => {
  // const [DATA, setDATA] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const userID = useSelector((state) => state.login.userID);
  console.log(userID);
  const authToken = useSelector((state) => state.login.authToken);
  const URL = `https://localhost:5000/api/v1/user/find/${userID}`;
  console.log(URL);

  let token = "Bearer " + authToken;

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
        console.log(json);
        setData(json);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
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
      setData(json);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  // useEffect(() => {
  // await axios
  //   .get(URL,{
  //     params:{
  //       id:UserID
  //     }
  //   })
  //   .then(function (response) {
  //     setDATA(response);
  //     // console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  //   const getUser = async () => {
  //     try {
  //       let response = await fetch(URL);
  //       let result = await response.json();
  //       setDATA(result);
  //       console.log(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, []);
  let userType;

  if (data.selectUser === 0) {
    userType = "Worker";
  } else {
    userType = "User";
  }

  let DATA = [
    {
      id: "1",
      title: "Name",
      value: data.name,
    },
    {
      id: "2",
      title: "Email Address",
      value: data.email,
    },
    {
      id: "3",
      title: "Phone Number",
      value: data.telephone_no,
    },
    {
      id: "4",
      title: "User Type",
      value: userType,
    },
  ];

  return (
    <SafeAreaView style={[{ backgroundColor: COLORS.backgroundColor }]}>
      <View style={styles.mainContainer}>
        <Header title={"BANTU.LK"} />

        <HeaderWithBack
          text={"Profile"}
          iconLeft={"arrow-left"}
          iconRight={"pencil"}
          textColor={COLORS.primary}
          iconsColor={COLORS.black}
        />

        <View style={styles.image}>
          <Image
            source={{
              uri: "https://gravatar.com/avatar/50d58429257679a47b1dbf6a6daffc76?s=400&d=robohash&r=x",
            }}
            resizeMode="contain"
            style={{
              width: 130,
              height: 130,
              borderColor: "red",
              borderRadius: 100,
              marginBottom: 30,
              marginTop: 30,
              backgroundColor: "white",
            }}
          />
        </View>

        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={DATA}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <TextDetail text={item.title} />
                  <Placeholder text={item.value} />
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2,
  },
});

export default Profile;
