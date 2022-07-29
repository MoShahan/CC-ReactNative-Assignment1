import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EachImage from "../screens/EachImage";
import ImageScreen from "../screens/ImageScreen";

const ImagesStack = createStackNavigator();

const ImageStack = () => {
  return (
    <ImagesStack.Navigator screenOptions={{ headerShown: false }}>
      <ImagesStack.Screen name="All Image" component={ImageScreen} />
      <ImagesStack.Screen name="Image" component={EachImage} />
    </ImagesStack.Navigator>
  );
};

export default ImageStack;
