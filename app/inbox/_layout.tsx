import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="[inbox_id]"
        options={{
            headerShown: false,
          }}
      />
    </Stack>
  );
}
