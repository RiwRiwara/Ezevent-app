import { useSession } from "@providers/ctx";
import { router } from "expo-router";
import { ApiLogout } from "@services/api/authentication/Logout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { retrieveToken } from "@utils/RetrieveToken";

export const useHandleSignOutByApi = () => {
  const { signOut } = useSession();

  const handleSignOutByApi = async () => {
    try {
      const token = await retrieveToken();
      const response = await ApiLogout(token);
      if (response.success) {
        signOut();
      } else {
        console.error("Logout failed:", response);
        signOut();
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return handleSignOutByApi;
};
