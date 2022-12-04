import { createStackNavigator } from "@react-navigation/stack";

import { ThemeUse } from "../../contexts/theme";
import Account from "../../screens/account";
import Settings from "../../screens/settings";
import Player from "../../screens/video";
import Home from "../home";
import Header from "./header";

const Stack = createStackNavigator();

export default function MyStack() {
  const colors = ThemeUse();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.dark },
        header: ({ route, navigation }) => (
          <Header route={route.name} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
}
