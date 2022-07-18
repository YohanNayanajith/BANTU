import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { icons, COLORS,SIZES } from "../constans";

const TextDetail = ({text}) => {
  return (
    <Text style={styles.textStyle}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 20,
    color: "black",
    textAlign: "left",
    marginLeft:20,
    marginTop:10,
  },
});

export default TextDetail