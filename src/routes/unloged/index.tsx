import { createStackNavigator } from "@react-navigation/stack";

import { ThemeUse } from "../../contexts/theme";
import UnlogedScreen from "../../screens/unloged";
const Stack = createStackNavigator();

export default function MyStackUnloged() {
  const colors = ThemeUse();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.dark },
      }}
    >
      <Stack.Screen name="UnlogedScreen" component={UnlogedScreen} />
    </Stack.Navigator>
  );
}
