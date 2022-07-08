import React, { useState, useEffect } from "react";
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import CustomInput from "../components/CustomInput.component";
import CustomButton from "../components/CustomButton.component";
// import { useNavigation } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
// import { icons, images, SIZES, COLORS } from "../constants";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// const { height } = Dimensions.get("window");
import SelectList from "react-native-dropdown-select-list";
import Header from "../components/Header.component";

import categories from "../constans/categories";

const URL1 = "https://62c3d0d17d83a75e39e803f7.mockapi.io/api/v1/categories";
const URL = "https://62c3d0d17d83a75e39e803f7.mockapi.io/api/v1/post";

// const dataCalled = () => {
//   fetch(URL, { method: "GET" })
//     .then((response) => response.json()) // get response, convert to json
//     .then((json) => {
//       setData(json);
//       createDataArray();
//       console.log("useEffect");
//       console.log(data);
//       console.log(dropDownData);
//     })
//     .catch((error) => alert(error)) // display errors
//     .finally(() => setLoading(false)); // change loading state
// };

const AddPost = () => {
  const [isLoading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  //   const [dropDownData, setDropDownData] = useState([]);

  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();

  const UserID = Cookies.get('UserID');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
    );
    setCurrentTime(
        hours + ':' + min + ':' + sec
    );
  }, []);

  const onConfirmButtonPressed = async (data) => {
    console.log(data);
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postTitle: data.postTitle,
          category: data.category,
          postDetail: data.postDetail,
          userID: UserID,
          noOfLikes: 0,
          date: currentDate,
          time: currentTime,
          isApproved: 0,
        }),
      });
      let json = await response.json();
      console.log(json);
    } catch (error) {
      alert(error);
    }
    navigation.navigate("Login");
  };

  //   const dropDownData = dropDownData1;

  //   useEffect(() => {
  //     fetch(URL, { method: "GET" })
  //       .then((response) => response.json()) // get response, convert to json
  //       .then((json) => {
  //         setData(json);
  //         createDataArray();
  //         console.log("useEffect");
  //         console.log(data);
  //         console.log(dropDownData);
  //       })
  //       .catch((error) => alert(error)) // display errors
  //       .finally(() => setLoading(false)); // change loading state
  //   }, []);

  //   dataCalled();

  // async function getCategoriesAsync() {
  //   try {
  //     let response = await fetch(URL);
  //     let json = await response.json();
  //     setData(json);
  //     setLoading(false);
  //     createDataArray();
  //     console.log("Normal");
  //     console.log(data);
  //     console.log(dropDownData);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  //this is came form database
  //   const dropDownData = [];

  //   const createDataArray = () => {
  //     data.forEach((x) => {
  //         setDropDownData({ key: x.id, value: x.category })
  //     //   dropDownData.push({ key: x.id, value: x.category });
  //     });
  //   };

  //   const onConfirmButtonPressed = (data) => {
  //     console.log(data);
  //     console.log("confirm button pressed");
  //   };

  return (
    <View>
      <Header title={"BANTU.LK"} />

      <View style={styles.title}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Text style={styles.title}>Add New Post</Text>

            <CustomInput
              name="postTitle"
              control={control}
              placeholder="Title"
              rules={{
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title should be at least 3 characters long",
                },
              }}
            />

            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <View style={styles.box}>
                <SelectList
                  data={categories}
                  setSelected={setSelected}
                  // rowStyle={styles.box}
                  boxStyles={{ borderColor: "white", paddingHorizontal: 10 }}
                  inputStyles={{ color: "gray" }}
                  dropdownStyles={{ borderColor: "white" }}
                  dropdownItemStyles={styles.itemStyle}
                  dropdownTextStyles={{ color: "gray" }}
                  placeholder="Select your category"
                  // maxWidth={"100%"}
                  search={false}
                />
              </View>
            )}

            <CustomInput
              name="postDetail"
              control={control}
              placeholder="Description"
              rules={{
                required: "Description is required",
              }}
            />

            <CustomButton
              text="Confirm"
              onPress={handleSubmit(onConfirmButtonPressed)}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    marginBottom: 10,
    // paddingTop: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
  box: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    // paddingHorizontal: 10,
    // paddingVertical: 10,
    marginVertical: 5,
  },
  itemStyle: {
    borderBottomColor: "black",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
  },
});

export default AddPost;
