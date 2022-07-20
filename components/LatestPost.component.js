import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, icons } from "../constans";

const LatestPost = (props) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {/* <Text style={{fontSize:16}}>Icon</Text> */}
        {/* <Text style={{fontSize:16}}>{icons.user}</Text> */}
        <Image
          source={icons.new_post}
          resizeMode="contain"
          style={{
            width: 32,
            height: 32,
            marginTop: 4,
          }}
        />
        <View style={styles.container2}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 20 }}>
            {props.name}
          </Text>
          <Text style={{ fontSize: 14 }}>
            {props.date} {props.time}
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 16, paddingLeft: 20, padding: 10 }}>
        {props.type}
      </Text>
      <View style={styles.container3}>
        <Image
          source={icons.heart}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            marginRight: 10,
          }}
        />
        <Image
          source={icons.comments}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            marginRight: 10,
          }}
        />
        <Image
          source={icons.add}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            marginRight: 10,
          }}
        />
      </View>
      {/* <View></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "#dddddd",
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 5,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // backgroundColor: "green",
    paddingLeft: 20,
    padding: 10,
  },
  container2: {
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "yellow",
    paddingLeft: 15,
  },
  container3: {
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: 16,
    paddingLeft: 20,
    padding: 10,
  },
});

export default LatestPost;
