// services/auth/SignIn.ts
import { useSession } from "@providers/ctx";
import { ApiLogin } from "@services/api/authentication/ApiLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Response {
  success: boolean;
  error: string;
  data: any;
}


export const useHandleSignInService = () => {
  const { signIn } = useSession();

  const handleSignInService = async (
    email: string,
    password: string,
    callback?: () => void
  ) => {
    try {
      const credentials = {
        email,
        password,
      };
      const response = await ApiLogin(credentials) as Response;

      if (response.success) {
        try {
          await AsyncStorage.setItem("token", response.data.token).then(() => {

            console.log("Token stored (SignIn.ts):", response.data.token);
            if (signIn) {
              signIn(response.data); 
            }
            if (callback) {
              callback();
            }
          });
        } catch (error) {
          console.error("Error storing token:", error);
        }

      } else {
        throw new Error(response.error || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Re-throw the error for the caller to handle if needed
    }
  };

  return handleSignInService;
};
