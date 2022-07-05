import React from 'react'
import {
    View,
    Text,
    StyleSheet,
  } from "react-native";

export const Tabs = () => {
  return (
    <View style={styles.container}>
        <Text>Home Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding:60,
        alignItems:'center',
        justifyContent:'center',
    },
});

export default Tabs;