import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';


export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ size, color }) => (
            <Feather name="inbox" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar-outline" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myevent"
        options={{
          tabBarLabel: "Myevent",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="folder-open-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
