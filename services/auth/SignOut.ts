import { useSession } from "@providers/ctx";
import { router } from "expo-router";
import { ApiLogout } from "@services/api/authentication/Logout";

export const useHandleSignOutByApi = () => {
  const { signOut } = useSession();
  const {session} = useSession();
  const handleSignOutByApi = async () => {
    try {
      const response = await ApiLogout(session);
      if (response.success) {
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