import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/containers/Login";
import Signup from "./src/containers/Signup";
import AppRouter from "./src/config/navigation";

export default function App() {
  const [login, setlogin] = useState(false);

  return (
    
    

    <AppRouter/>
  

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding:20
  },
});
