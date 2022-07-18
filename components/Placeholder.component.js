import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
const { height, width } = Dimensions.get("window");
import { icons, COLORS, SIZES } from "../constans";

const Placeholder = ({ text }) => {
  return (
    <View style={styles.textPlaceholder}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPlaceholder: {
    height: 50,
    width: width - 40,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 50,
    marginLeft: 20,
    // alignItems:"center",
    justifyContent: "center",
    // flexDirection:"column"
    // marginRight:120,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2,
  },
  textStyle: {
    // fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 30,
    color: "grey",
    textAlign: "left",
  },
});

export default Placeholder;
