import React, { useContext } from "react";
import { Dimensions, Text, View } from "react-native";

const Contact = ({ route }) => {
  const { contact } = route.params;

  return (
    <View
      style={{
        height: Dimensions.get("window").height,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>
        Name : {contact[0] + " " + contact[1]}
      </Text>
      <Text style={{ fontSize: 30, marginTop: 10 }}>Number : {contact[2]}</Text>
    </View>
  );
};

export default Contact;
