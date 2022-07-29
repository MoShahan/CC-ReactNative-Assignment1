import React from "react";
import { Dimensions, Image, View } from "react-native";

const EachImage = ({ route }) => {
  const { image } = route.params;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300,
        borderRadius: 15,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: Dimensions.get("window").width,
          height: 200,
        }}
      />
    </View>
  );
};

export default EachImage;
