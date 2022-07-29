import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";
import ContactStack from "./stacks/ContactStack";
import ImageStack from "./stacks/ImageStack";
import CameraScreen from "./screens/CameraScreen"

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { marginTop: Constants.statusBarHeight },
          }}
        >
          <Tab.Screen name="Camera" component={CameraScreen} />
          <Tab.Screen name="Contacts" component={ContactStack} />
          <Tab.Screen name="Pictures" component={ImageStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
