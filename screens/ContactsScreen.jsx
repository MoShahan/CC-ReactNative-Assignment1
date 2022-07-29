import React from "react";
import { FlatList, Text, View } from "react-native";

const ContactsScreen = ({ navigation }) => {
  const contactsList = [
    ["John", "Cena", "123654789"],
    ["Alan", "Walker", "852147963"],
    ["Nucleya", "", "654123987"],
    ["Stephen", "Strange", "652398741"],
    ["Black", "Adam", "521489637"],
    ["Hal", "Jordan", "582693471"],
    ["Barry", "Allen", "965874123"],
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <FlatList
        style={{
          marginTop: 150,
        }}
        data={contactsList}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 10,
              borderRadius: 15,
              margin: 10,
              backgroundColor: "blue",
              color: "white",
              fontSize: 30,
              width: 200,
              textAlign: "center",
            }}
            onPress={() => {
              navigation.navigate("Contact", { contact: item });
            }}
          >
            {item[0]}
          </Text>
        )}
        keyExtractor={(contact) => contact[0]}
      />
    </View>
  );
};

export default ContactsScreen;
