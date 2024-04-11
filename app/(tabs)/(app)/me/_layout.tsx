import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index"
      options={{
        title: "Me",
        headerShown: false,
      }}
       />
    </Stack>
  );
};

export default Layout;
