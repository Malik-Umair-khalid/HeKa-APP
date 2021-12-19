import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import logo from "../../assets/icon.png";
import QRCode from "react-native-qrcode-svg";
import {
  auth,
  signOut,
  setDoc,
  collection,
  db,
  doc,
  onAuthStateChanged,
  getDoc,
  onSnapshot,
} from "../config/Firebase";

function Admin({ navigation, route }) {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff" }}>Check With UID</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("scaner")} style={styles.button}>
        <Text style={{ color: "#fff" }}>Scan QR Code </Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#fff",
  },
  para: {
    fontWeight: "300",
    fontSize: 14,
    color: "gray",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 40,
    width: 95 + "%",
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    color: "gray",
    marginTop: 20,
    maxHeight: 100,
    height: 70,
    borderColor: "#f2f2f2",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#32465e",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: "auto",
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
  },
});

export default Admin;
