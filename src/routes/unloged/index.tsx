import { createStackNavigator } from "@react-navigation/stack";

import Header from "./header";
import { ThemeUse } from "../../contexts/theme";
import UnlogedScreen from "../../screens/unloged";
const Stack = createStackNavigator();

export default function MyStackUnloged() {
  const colors = ThemeUse();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.dark },
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="UnlogedScreen" component={UnlogedScreen} />
    </Stack.Navigator>
  );
}
