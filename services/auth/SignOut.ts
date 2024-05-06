import { useSession } from "@providers/ctx";
import { router } from "expo-router";
import { ApiLogout } from "@services/api/authentication/Logout";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useHandleSignOutByApi = () => {
  const { signOut } = useSession();
  const {session} = useSession();
  const handleSignOutByApi = async () => {
    try {
      const response = await ApiLogout(session);
      if (response.success) {
        // Remove the token from AsyncStorage
        await AsyncStorage.removeItem('token');

        signOut();
        router.replace("/");
      } else {
        console.error("Logout failed:", response);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return handleSignOutByApi;
};