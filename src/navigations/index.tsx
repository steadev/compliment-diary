import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ActivityIndicator } from "react-native";
import MainNavigator from "./main-navigator";
import SettingNavigator from "./setting-navigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer fallback={<ActivityIndicator size="large" />}>
      <Stack.Navigator
        initialRouteName={"Main"}
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Setting" component={SettingNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
