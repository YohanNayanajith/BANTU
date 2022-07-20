import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";
import { icons, SIZES, COLORS } from "../constans";
import Cookies from "js-cookie";
import { Logout } from '../store/actions';
import { useDispatch } from 'react-redux';

const Header = (props) => {
  const [notificationIcon, setNotificationIcon] = useState(COLORS.black);
  const [logout, setlogout] = useState(COLORS.black);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (Platform.OS == "android") {
  //     setStartHeaderHeight(100 + StatusBar.currentHeight);
  //   }
  // }, []);

  const signOut = () => {
    setlogout(COLORS.primary);
    Cookies.remove("token");
    Cookies.remove("userID");
    Cookies.remove("type");
    dispatch(Logout());
    navigation.navigate("Login");
  };

  const pressNotification = () => {
    setNotificationIcon(COLORS.primary);
  };

  return (
    <View
      style={{
        height: 50,
        marginTop: Platform.OS == "android" ? 30 : null,
        backgroundColor: COLORS.white,
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", height: 50 }}>
          <TouchableOpacity
            style={{
              width: 50,
              paddingLeft: SIZES.padding * 2,
              justifyContent: "center",
            }}
            onPress={pressNotification}
          >
            <Image
              source={icons.bell}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
            {/* <Icon name={"bell"} size={30} backgroundColor={notificationIcon} /> */}
          </TouchableOpacity>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: COLORS.lightGray3,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
              }}
            >
              <Text style={{ fontSize: SIZES.h3, lineHeight: 22 }}>
                {props.title}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: 50,
              paddingRight: SIZES.padding * 2,
              justifyContent: "center",
            }}
            onPress={signOut}
          >
            <Image
              source={icons.logout}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.lightGray4,
    // backgroundColor: "black",
  },
});

export default Header;
