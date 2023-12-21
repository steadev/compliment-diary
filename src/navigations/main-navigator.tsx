import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HistoryScreen from "../screens/History/History";
import HomeScreen from "../screens/Home/Home";

const Tab = createBottomTabNavigator();
export type TabName = "Home" | "History";

const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={"Home"}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? "black" : "lightgrey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list-ul"
              size={24}
              color={focused ? "black" : "lightgrey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
