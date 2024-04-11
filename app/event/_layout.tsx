import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="[event_id]"
        options={{
            headerShown: false,
          }}
      />
    </Stack>
  );
}
