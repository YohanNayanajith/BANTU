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
} from "react-native";
import Cookies from "js-cookie";
import axios from "axios";
import Header from "../components/Header.component";
import Placeholder from "../components/Placeholder.component";
import { icons, COLORS, SIZES, FONTS } from "../constans";
import TextDetail from "../components/TextDetail.component";
import HeaderWithBack from "../components/HeaderWithBack.component";
import { useNavigation } from "@react-navigation/core";

const DATA = [
  {
    id: "1",
    title: "Name",
  },
  {
    id: "2",
    title: "Email Address",
  },
  {
    id: "3",
    title: "Phone Number",
  },
  {
    id: "4",
    title: "User Type",
  },
];

const Profile = () => {
  // const [DATA, setDATA] = useState([]);
  const UserID = Cookies.get("UserID");

  const URL = `https://62c3d0d17d83a75e39e803f7.mockapi.io/api/v1/users/${UserID}`;

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
          <FlatList
            data={DATA}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View>
                <TextDetail text={item.title} />
                <Placeholder text={"Name"} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
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
