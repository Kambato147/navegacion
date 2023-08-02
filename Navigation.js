import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Pantallas principales
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import SettingStack from "./screens/SettingStack";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// navegacion por botones
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="settngStack" component={SettingStack} />
    </Stack.Navigator>
  );
}

// navegacion con botones
function MyTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#232323",
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        component={MyStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        component={ChatScreen}
        options={{
          title: "Chat",
          tabBarBadge: 6,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" size={30} color={color} />
          ),
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
