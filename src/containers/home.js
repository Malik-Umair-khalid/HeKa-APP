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
  ScrollView,
  Picker,
} from "react-native";
import MyImagePicker from "../Components/ImagePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  auth,
  signOut,
  setDoc,
  collection,
  db,
  doc,
  onAuthStateChanged,
} from "../config/Firebase";

const Item = ({ item, onPress, backgroundColor, textColor, color }) => (
  <TouchableOpacity
    onPress={onPress}
    key="1"
    style={[styles.button, { backgroundColor: backgroundColor }]}
  >
    <Text style={{ color: textColor }}>{item.title}</Text>
  </TouchableOpacity>
);

function Home({ navigation }) {
  const [name, setname] = useState("");
  const [Father, setFather] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [Fmembers, setFmembers] = useState("");
  const [UID, setUID] = useState("");
  const [selectedValue, setSelectedValue] = useState("java");
  const [pic, setpic] = useState(null)
  const [CNICFront, setCNICFront] = useState(null)
  const [CNICBack, setCNICBack] = useState(null)

  const application = {
    name,
    Father,
    CNIC,
    DOB,
    Fmembers,
    selectedValue,
    pic,
    CNICBack,
    CNICFront,
    UID
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("signup");
      })
      .catch((error) => {});
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button color="#1ec77f" onPress={logOut} title="Logout" />
      ),
    });
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUID(user.uid);
    });
  });
  const handleSubmit = async () => {
    const applicationsCol = collection(db, "AllApplicstions");
    const applicationDoc = doc(applicationsCol, UID);
    await setDoc(applicationDoc, {
      userData: application,
      reqStatus: "pending"
    });
    alert("Application submitted!");
    navigation.navigate("All Applications"); 
    console.log(application);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.para}>Add Your Sign Details</Text>
        <ScrollView style={{ width: "100%", padding: 10, paddingVertical: 0 }}>
          <TextInput
            onChangeText={(e) => setname(e)}
            placeholder="Name"
            style={styles.input}
          ></TextInput>
          <TextInput
            placeholder="Email"
            onChangeText={(e) => setFather(e)}
            keyboardType="email-address"
            style={styles.input}
          ></TextInput>
          <TextInput
            onChangeText={(e) => setCNIC(e)}
            placeholder="Passward"
            style={styles.input}
            secureTextEntry={true}
          ></TextInput>
          <TextInput
            onChangeText={(e) => setDOB(e)}
            placeholder="Date of Birth"
            style={styles.input}
          ></TextInput>
          <TextInput
            onChangeText={(e) => setFmembers(e)}
            placeholder="No. Of Family "
            style={styles.input}
          ></TextInput>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 100, width: "90%" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Help category" value="java" />
            <Picker.Item label="Monthly Ration" value="Monthly" />
            <Picker.Item label="Daily 1" value="d1" />
            <Picker.Item label="Daily 2" value="d1" />
            <Picker.Item label="Daily 3" value="d1" />
          </Picker>
          <MyImagePicker pic={pic} setPic={setpic} text="Upload Your Photo"/>
          <MyImagePicker pic={CNICFront} setPic={setCNICFront} text="upload CNIC Front"/>
          <MyImagePicker pic={CNICBack} setPic={setCNICBack} text="upload CNIC Back"/>

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={{ color: "#fff" }}>Submit Appliction</Text>
          </TouchableOpacity>
        </ScrollView>
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
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 15
 
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

export default Home;
