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
import { useNavigation } from "@react-navigation/native";
import { icons, images, SIZES, COLORS } from "../constans";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { height } = Dimensions.get("window");

import Header from "../components/Header.component";

const URL = "https://62c3d0d17d83a75e39e803f7.mockapi.io/api/v1/post";

const Card = ({ pet, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Payment", pet)}
    >
      <View style={styles.cardContainer}>
        {/* Render the card image */}
        <View style={styles.cardImageContainer}>
          <Image
            // source={{ uri: pet.pet_image }}
            source={{ uri: "http://www.bantu.lk/images/LOGO3.png" }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={styles.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", color: COLORS.dark, fontSize: 20 }}
            >
              {pet?.postTitle}
            </Text>
            {/* <Icon name="gender-male" size={22} color={COLORS.grey} /> */}
          </View>

          {/* Render the age and type */}
          <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
            {pet?.postDetail}
          </Text>
          <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.grey }}>
            {pet?.category}
          </Text>

          {/* Render distance and the icon */}
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <Icon
              name="gender-male-female-variant"
              color={COLORS.primary}
              size={18}
            />
            <Text style={{ fontSize: 12, color: COLORS.grey, marginLeft: 5 }}>
              {pet?.date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigation = useNavigation();

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
    <View>
      <Header title={"BANTU.LK"} />

      <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={styles.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={styles.searchInputContainer}>
            <Icon name="magnify" size={24} color={COLORS.grey} />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Search pet to adopt"
              style={{ flex: 1 }}
            />
            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
          </View>

          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ flex: 1, marginTop: 20 }}>
                <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <Card pet={item} navigation={navigation} />
                  )}
                  contentContainerStyle={{
                    flexGrow: 1,
                  }}
                />
              </View>
            </ScrollView>
          )}
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </View>
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

  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    //   marginTop: 20,
    paddingHorizontal: 20,
    //   paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: "center",
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});

export default Home;
