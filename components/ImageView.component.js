import React from "react";
import { View, Image, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const ImageView = () => {
  return (
    <View style={{ width: width - 40, height: 200, marginTop: 10 }}>
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#dddddd",
          // shadowColor: "black",
          // shadowOpacity: 0.2,
          // shadowOffset: {width: 2, height: 4},
          // elevation: 2,
        }}
        source={{ uri: "http://www.bantu.lk/images/LOGO3.png" }}
      />
    </View>
  );
};

export default ImageView;