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

function Result({ navigation, route }) {
  const [uid, setUid] = useState(null);
  const [application, setApplication] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      await setUid(user.uid);
    });
  }, []);
  useEffect(() => {
    if (uid) {
      getApplication();
    }
  }, [uid]);

  const getApplication = async () => {
    const docRef = doc(db, "AllApplicstions", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setApplication(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  console.log(application?.reqStatus);
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 0.5, width: "100%" }}>
          <Image
            source={logo}
            style={{ width: "100%", height: 100, resizeMode: "cover", flex: 1 }}
          />
        </View>
        <View style={{ flex: 0.5, backgroundColor: "#89c343", width: "100%" }}>
          {application?.reqStatus === "Accepted" ? (
            <ScrollView
              contentContainerStyle={{ padding: 20 }}
              style={{ padding: 10 }}
            >
              <View style={{ flex: 0.2 }}>
                <Text
                  style={{
                    textAlign: "center",
                    padding: 20,
                    color: "white",
                    fontSize: 30,
                    borderColor: "white",
                    borderWidth: 1,
                  }}
                >
                  Khana Sab Ka Liya
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <QRCode size={150} value={application.userData.UID} />
                <Text style={{ marginTop: 20 }}>
                  {application.userData.UID}
                </Text>
              </View>
              <View style={{ flex: 0.5, padding: 20 }}>
                <Text style={{ color: "white", fontSize: 18 }}>
                  Name : {application ? application.userData.name : null}
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  Father Name : {application?.userData.Father}
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  CNIC No : {application?.userData.CNIC}
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  Date Of Birth : {application?.userData.DOB}
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  Number Of Family Members : {application?.userData.Fmembers}{" "}
                  <Text></Text>
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  Food Requirment : {application?.userData.selectedValue}
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Food Bank Branch Name:{" "}
                </Text>
                <Text>Gulshan is your nearest Saylani Branh</Text>
              </View>
            </ScrollView>
          ) : application?.reqStatus === "pending" ? (
            <Text>Your Application is Pending Please Wait Until Response</Text>
          ) : application?.reqStatus === "Rejected" ? (
            <Text>Your Application Is Rejected</Text>
          ) : null}
        </View>
      </View>
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
    margin: "auto",
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

export default Result;
