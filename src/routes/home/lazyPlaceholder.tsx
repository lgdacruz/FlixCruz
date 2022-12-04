import { Image } from "react-native";

import { ViewCenter } from "../../style";

export default function Lazy() {
  return (
    <ViewCenter hg="100%">
      <Image
        source={require("../../assets/dev.png")}
        style={{ width: 70, height: 70 }}
      />
    </ViewCenter>
  );
}
