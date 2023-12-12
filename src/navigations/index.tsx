import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ActivityIndicator } from "react-native";

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
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
