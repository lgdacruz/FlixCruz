import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Lazy from "./lazyPlaceholder";
import { ThemeUse } from "../../contexts/theme";
import Animes from "../../screens/home/animes";
import Films from "../../screens/home/films";
import Series from "../../screens/home/series";

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  const colors = ThemeUse();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { color: colors.verylight, fontWeight: "bold" },
        tabBarContentContainerStyle: { backgroundColor: colors.dark },
        swipeEnabled: false,
        lazy: true,
        lazyPlaceholder: () => <Lazy />,
      }}
    >
      <Tab.Screen
        name="Films"
        component={Films}
        options={{ title: "Filmes" }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{ title: "Séries" }}
      />
      <Tab.Screen
        name="Animes"
        component={Animes}
        options={{ title: "Animes" }}
      />
    </Tab.Navigator>
  );
}
