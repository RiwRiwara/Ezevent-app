import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpComing"
        options={{
          title: "Upcoming Events",
        }}
      />
      <Stack.Screen
        name="InProgress"
        options={{
          title: "In Progress Events",
        }}
      />
      <Stack.Screen
        name="Reviewing"
        options={{
          title: "Reviewing",
        }}
      />
      <Stack.Screen
        name="Complete"
        options={{
          title: "Complete Events",
        }}
      />
    </Stack>
  );
};

export default Layout;
