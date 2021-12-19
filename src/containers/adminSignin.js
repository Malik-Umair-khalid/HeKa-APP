import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  query,
  collection,
  db,
  where,
  getDocs,
} from "../config/Firebase";

function AdminLogin({ navigation }) {
  const [email, setemail] = useState(null);
  const [pass, setpass] = useState(null);

  const login = async () => {
    if (email.length < 5) {
      alert("Invalid Name");
    } else if (pass.length < 6) {
      alert("Invalid Pass");
    } else {
      const q = query(
        collection(db, "Branch Admin"),
        where("name", "==", email),
        where("passward", "==", pass)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      navigation.navigate("Manajer");
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.para}>Add Your Sign Details</Text>
        <TextInput
          onChangeText={(e) => setemail(e)}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Passward"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(e) => setpass(e)}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
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
    padding: 10,
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
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 100,
  },
});

export default AdminLogin;
