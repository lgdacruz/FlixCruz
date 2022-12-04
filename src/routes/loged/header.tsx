import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { ButtonCenter, TextCenter, ViewCenter } from "../../style";

export default function Header({ route, navigation }) {
  const value = useRef(new Animated.Value(1)).current;
  const rotate = value.interpolate({
    inputRange: [1, 1.4],
    outputRange: ["-15deg", "15deg"],
  });

  const moving = Animated.sequence([
    Animated.timing(value, {
      toValue: 1.4,
      duration: 1000,
      useNativeDriver: true,
    }),
    Animated.timing(value, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]);

  const Loop = () => {
    Animated.loop(moving).start();
  };

  useEffect(() => Loop(), []);

  if (route === "Home") {
    return (
      <ViewCenter
        hg="150px"
        fd="row"
        pd="20px 0px 0px 0px"
        justify="space-around"
      >
        <ButtonCenter onPress={() => navigation.navigate("Account")}>
          <FontAwesome name="user" size={24} color="white" />
        </ButtonCenter>
        <Animated.Image
          source={require("../../assets/dev.png")}
          style={{
            width: 50,
            height: 50,
            transform: [{ rotate }, { scale: value }],
          }}
        />

        <ButtonCenter onPress={() => navigation.navigate("Settings")}>
          <AntDesign name="setting" size={24} color="white" />
        </ButtonCenter>
      </ViewCenter>
    );
  }
  if (route === "Settings") {
    return (
      <ViewCenter hg="150px" fd="row" justify="space-around">
        <ButtonCenter onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </ButtonCenter>
        <TextCenter>Configurações</TextCenter>
      </ViewCenter>
    );
  }
  if (route === "Account") {
    return (
      <ViewCenter hg="150px" fd="row" justify="space-around">
        <ButtonCenter onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </ButtonCenter>
        <TextCenter>Minha conta</TextCenter>
      </ViewCenter>
    );
  }
  if (route === "Player") {
    return (
      <ViewCenter hg="150px" fd="row" justify="flex-start">
        <ButtonCenter onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </ButtonCenter>
      </ViewCenter>
    );
  }
}
