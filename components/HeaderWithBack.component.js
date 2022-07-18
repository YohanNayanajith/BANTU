import React, { useState } from "react";
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
import { icons, COLORS, SIZES, FONTS } from "../constans";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const HeaderWithBack = ({
  text,
  iconLeft,
  iconRight,
  textColor,
  iconsColor,
}) => {
  const [backProfile, setBackProfile] = useState(iconsColor);
  const [editProfile, setEditProfile] = useState(iconsColor);
  const navigation = useNavigation();
  const HeaderBackButton = () => {
    setBackProfile(COLORS.primary);
    // navigation.navigate("home");
  };
  const HeaderEditButton = () => {
    setEditProfile(COLORS.primary);
    // navigation.navigate("EditPost");
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={HeaderBackButton}>
        <Icon
          name={iconLeft}
          size={25}
          color={editProfile}
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>

      <Text style={[styles.headerText, { color: textColor }]}>{text}</Text>
      <TouchableOpacity onPress={HeaderEditButton}>
        <Icon
          name={iconRight}
          size={25}
          color={iconsColor}
          style={{ marginRight: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  headerText: {
    fontSize: SIZES.mobileHeading,
    fontWeight: "700",
    paddingHorizontal: 20,
    textAlign: "center",
  },
});

export default HeaderWithBack;
