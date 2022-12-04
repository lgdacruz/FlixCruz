import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import MyStack from "./routes/loged";

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
