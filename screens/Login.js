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

// const URL = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/register";
const URL = "https://62c3d0d17d83a75e39e803f7.mockapi.io/api/v1/users";

const Login = () => {
  //   const [loginData, setLoginData] = useState(
  //     localStorage.getItem("loginData")
  //       ? JSON.parse(localStorage.getItem("loginData"))
  //       : null
  //   );
  const [ role,setRole ] = useState("");
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
      let response = await fetch(URL);
      let result = await response.json();
      result.map((x) => {
        if (x.name == data.username && x.password == data.password) {
          flag = true;
          console.log(x.selectUser);
          setRole(x.selectUser);
          console.log(x.selectUser);
          // AsyncStorage.setItem("userName",x.name);
          // <eventsData data={x.name} />
        }
      });

      if (flag) {
        // 1 - user
        // 2 - worker
        console.log(role);
        Cookies.set("UserName", data.username, { expires: 70000, path: "" });
        Cookies.set("loginstatus", "loged", { expires: 70000, path: "" });
        Cookies.set("role", role, { expires: 70000, path: "" });

        if(role == "1"){
          alert("Role - User");
          navigation.navigate("Tabs","1");
        }else {
          alert("Role - Worker");
          navigation.navigate("Tabs","2");
        }
        
        // Swal.fire({
        //   title: "Success!",
        //   text: "Login Successed!",
        //   icon: "success",
        //   confirmButtonText: "OK",
        // }).then((okay) => {
        //   if (okay) {
        //     navigation.navigate("Tabs");
        //   }
        // });
      } else {
        alert("Entered username & password is wrong!");
        //   Swal.fire({
        //     title: "Error!",
        //     text: "Entered username & password is wrong!",
        //     icon: 'error',
        //     confirmButtonText: "OK",
        //     }).then(okay => {
        //         if (okay) {

        //     }
        // });
      }
    } catch (error) {
      alert(error);
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

        <SocialSignInButtons />

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
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Login;
