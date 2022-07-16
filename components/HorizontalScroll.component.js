import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, { Component, useEffect, useState } from "react";
import Category from "../components/Category.component";
import { COLORS } from "../constans";

const HorizontalScroll = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20, color: COLORS.black }}>
        {props.title}
      </Text>

      <View style={{ height: 130, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            imageUri={{ uri: "http://www.bantu.lk/images/LOGO3.png" }}
            name="Saloon"
          />
          <Category
            imageUri={{ uri: "http://www.bantu.lk/images/LOGO3.png" }}
            name="Garden"
          />
          <Category
            imageUri={{ uri: "http://www.bantu.lk/images/LOGO3.png" }}
            name="IT"
          />
          <Category
            imageUri={{ uri: "http://www.bantu.lk/images/LOGO3.png" }}
            name="Backery"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HorizontalScroll;
