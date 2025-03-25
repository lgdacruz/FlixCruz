import { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { TextCenter, ViewCenter } from "../../style";

export default function Header() {
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

  return (
    <ViewCenter hg="150px" pd="40px 0px 0px 0px" justify="space-around">
      <TextCenter color="red" bold mg="20px">
        FlixCrux
      </TextCenter>
      <Animated.Image
        source={require("../../assets/dev.png")}
        style={{
          width: 50,
          height: 50,
          transform: [{ rotate }, { scale: value }],
        }}
      />
    </ViewCenter>
  );
}
