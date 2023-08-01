import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Pantallas principales
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import SettingStack from "./SettingStack";

const Tabs = createBottomTabNavigator();

// navegacion con botones
function MyTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#232323",
      }}
    >
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: (({ color }) => (
            <MaterialCommunityIcons name="home" size={30} color={color}/>
          ))
        }}
      />
      <Tabs.Screen
        name="chat"
        component={ChatScreen}
        options={{
          title: "Chat",
          tabBarBadge: 6,
          tabBarIcon: (({ color }) => (
            <MaterialCommunityIcons name="chat" size={30} color={color} />
          ))
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
