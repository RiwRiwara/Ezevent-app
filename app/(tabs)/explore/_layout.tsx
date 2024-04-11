import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Explore",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

