import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../containers/home";
import Signup from "../containers/Signup";
import Login from "../containers/Login";
import { onAuthStateChanged, auth } from "../config/Firebase";
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import Questions from "../containers/Questions";
import Result from "../containers/Result";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import AdminLogin from "../containers/adminSignin";
import Admin from "../containers/admin";
import SCANNER from "../containers/barCodeScanner";

function AppRouter() {
  const Drawer = createDrawerNavigator();
  const [userAuth, setuserAuth] = useState(false);

  const Stack = createNativeStackNavigator();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      setuserAuth(true);
      // ...
    } else {
      // User is signed out
      // ...
      setuserAuth(false);
      console.log("No USer");
    }
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Drawer.Navigator initialRouteName="signup">
            {userAuth ? (
              <>
                <Drawer.Screen
                  options={{
                    title: "New Application",
                    headerStyle: {
                      backgroundColor: "white",
                    },
                    headerTintColor: "black",
                  }}
                  name="home"
                  component={Home}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle: {
                      display: "none",
                    },
                    title: "Question",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  name="questions"
                  component={Questions}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle: {
                      // display: "none"
                    },
                    title: "Home",
                    headerStyle: {
                      backgroundColor: "white ",
                    },
                    headerTintColor: "black",
                  }}
                  name="result"
                  component={Result}
                />
              </>
            ) : (
              <>
                <Drawer.Screen
                  name="signup"
                  options={{
                    title: "Sign Up",

                    headerTintColor: "black",
                  }}
                  component={Signup}
                />
                <Drawer.Screen
                  name="login"
                  options={{
                    title: "Login",
                    headerTintColor: "black",
                  }}
                  component={Login}
                />
                <Drawer.Screen
                  name="ADMINLOGIN"
                  options={{
                    title: "ADMIN LOGIN",
                    headerTintColor: "black",
                  }}
                  component={AdminLogin}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle: {
                      display: "none",
                    },
                    title: "BRANCH MANAGER",
                    headerStyle: {
                      backgroundColor: "white",
                    },
                    headerTintColor: "black",
                  }}
                  name="Manajer"
                  component={Admin}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle: {
                      display: "none",
                    },
                    title: "Scan Via Bar Code",
                    headerStyle: {
                      backgroundColor: "white",
                    },
                    headerTintColor: "black",
                  }}
                  name="scaner"
                  component={SCANNER}
                />
              </>
            )}
          </Drawer.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default AppRouter;
