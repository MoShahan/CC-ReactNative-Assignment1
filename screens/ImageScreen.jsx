import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  View,
} from "react-native";

const ImageScreen = ({ navigation }) => {
  const ImageList = [
    "https://i.pinimg.com/originals/5d/6f/97/5d6f97db32b2445bbdf612d92cf65de0.jpg",
    "https://wallup.net/wp-content/uploads/2016/04/06/352463-nature-landscape-mountains-Wyoming.jpg",
    "https://wallup.net/wp-content/uploads/2016/03/10/330195-nature-landscape-forest-snowy_peak-clouds-spring-Swiss_Alps-green.jpg",
    "https://wallup.net/wp-content/uploads/2019/09/295784-mountains-landscapes-nature-california-streams-land.jpg",
    "https://wallup.net/wp-content/uploads/2019/09/651745-house-summer-trees-jungle-forest-countryside-huts-landscapes-nature-earth-hills-sky-clouds-blue-horse-farms.jpg",
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
        data={ImageList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Image", { image: item });
            }}
          >
            <Image
              source={{
                uri: item,
              }}
              style={{ width: 200, height: 100, margin: 25 }}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default ImageScreen;
