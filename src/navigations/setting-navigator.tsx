import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screens/Setting/Setting";

const Stack = createNativeStackNavigator();
const SettingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="Home" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
