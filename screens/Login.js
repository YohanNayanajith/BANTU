import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  AsyncStorage,
} from "react-native";
// import Logo from "../assets/images/logo.jpg";
import CustomInput from "../components/CustomInput.component";
import CustomButton from "../components/CustomButton.component";
import SocialSignInButtons from "../components/SocialSignInButtons.component";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
// import CookieManager from '@react-native-cookies/cookies';
import { LoginApi } from "./API/LoginApi";

// const URL = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/register";
// const URL = "https://192.168.8.187:5000/api/v1/auth/login";
const URL = "https://localhost:5000/api/v1/auth/login";

const Login = () => {
  //   const [loginData, setLoginData] = useState(
  //     localStorage.getItem("loginData")
  //       ? JSON.parse(localStorage.getItem("loginData"))
  //       : null
  //   );
  const [role, setRole] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    console.log(data);
    let flag = false;
    try {
      let response = await fetch('http://192.168.8.187:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.username,
          password: data.password,
        })
      });

      let result = await response.json();
      // console.log(result);
      Cookies.set('token', result.accessToken.toString(), { expires: 7 });
      Cookies.set('userID', result._id.toString(), { expires: 7 });
      Cookies.set('type', result.selectUser.toString(), { expires: 7 });
      console.log(result.accessToken);

      if (role == "1") {
        alert("Role - User");
        navigation.navigate("Tabs", "1");
      } else {
        alert("Role - Worker");
        navigation.navigate("Tabs", "2");
      }
    }catch(err){
      console.log("Something Worng");
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgetPassword");
    // console.log("Forget password pressed");
  };

  const onSignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.root}>
        <Image
          source={{ uri: "http://www.bantu.lk/images/LOGO3.png" }}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          //   bgColor="#E7EAF4"
          //   fgColor="#4765A9"
        />

        {Platform.OS === "android" ? <SocialSignInButtons /> : null}

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  root: {
    alignItems: "center",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,

    // backgroundColor:'red',
  },
  logo: {
    // width: "70%",
    width: 200,
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Login;
