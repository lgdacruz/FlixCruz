import { StyleSheet } from "react-native";
import Video from "react-native-video";

const tinta = require("../../assets/Tinta.mp4");

export default function Player() {
  return (
    <Video
      source={tinta} // Can be a URL or a local file.
      style={styles.backgroundVideo}
      controls
    />
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
