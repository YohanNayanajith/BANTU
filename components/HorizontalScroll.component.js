import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, { Component, useEffect, useState } from "react";
import Category from "../components/Category.component";
import { COLORS } from "../constans";

const HorizontalScroll = ({ title, data }) => {
  // console.log("Meka thama");
  // console.log(data);
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          paddingHorizontal: 20,
          color: COLORS.black,
        }}
      >
        {title}
      </Text>

      {/* <View style={{ height: 130, marginTop: 20 }}>
        {data.map((item) => {
          <Category imageUri={{ uri: item.img }} name={data.category} />;
        })}
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Category imageUri={{ uri: item.img }} name={data.category} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View> */}

      <View style={{ height: 130, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((item) => {
            return (
              <Category key={item._id} imageUri={{ uri: item.img }} name={item.category} />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HorizontalScroll;
