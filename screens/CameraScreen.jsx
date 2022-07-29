import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(true);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ height: "100%" }}>
      <Camera style={{ height: "70%", marginTop: 50 }} type={type}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Text
              style={{
                fontSize: 50,
                backgroundColor: "red",
                padding: 2,
                textAlign: "center",
              }}
            >
              Flip the Camera
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
