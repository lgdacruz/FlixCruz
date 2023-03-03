import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { ActivityIndicator } from "react-native";

import { AuthUse } from "./contexts/auth";
import MyStack from "./routes/loged";
import MyStackUnloged from "./routes/unloged";
import { ViewCenter } from "./style";

export default function Navigation() {
  const { user, globalLoading } = AuthUse();

  if (globalLoading) {
    return (
      <ViewCenter hg="100%" wd="100%">
        <ActivityIndicator />
      </ViewCenter>
    );
  }
  return (
    <NavigationContainer>
      {user ? <MyStack /> : <MyStackUnloged />}
    </NavigationContainer>
  );
}
