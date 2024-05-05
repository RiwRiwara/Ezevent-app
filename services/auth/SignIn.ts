// services/auth/SignIn.ts
import { useSession } from "@providers/ctx";
import { ApiLogin } from "@services/api/authentication/ApiLogin";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

export const useHandleSignInByApi = () => {
  const { signIn } = useSession();

  const handleSignInByApi = async (
    email: string,
    password: string,
    callback?: () => void
  ) => {
    try {
      const credentials = {
        email,
        password,
      };
      const response = await ApiLogin(credentials);

      if (response.success) {
        // Store the token in AsyncStorage
        await storeToken(response.data.token);

        // Call the signIn function if provided by the session context
        if (signIn) {
          signIn(response.data); // Assuming signIn takes user data
        }
        // If a callback is provided, call it
        if (callback) {
          callback();
        }


      } else {
        throw new Error(response.error || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Re-throw the error for the caller to handle if needed
    }
  };

  return handleSignInByApi;
};
