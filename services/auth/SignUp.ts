// services/auth/SignUp.ts
import { useSession } from "@providers/ctx";
import { ApiRegister } from "@services/api/authentication/ApiRegister";

export const useHandleSignUpByApi = () => {
  const { signIn } = useSession();

  const handleSignUpByApi = async (
    userData: { email: string; password: string, mobile_number:string, password_confirmation:string }, 
    callback?: () => void
  ) => {
    try {
      const response = await ApiRegister(userData);

      if (response.success) {
        // Call the signIn function if provided by the session context
        if (signIn) {
          signIn(response.data); // Assuming signIn takes user data
        }

        // If a callback is provided, call it
        if (callback) {
          callback();
        }
      } else {
        throw new Error(response.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      throw error; // Re-throw the error for the caller to handle if needed
    }
  };

  return handleSignUpByApi;
};
