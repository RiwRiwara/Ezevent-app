import React, { useEffect } from "react";
import { useStorageState } from "./useStorageState";
import { API_ENDPOINTS, getApiUrl } from "@constants/api/endpoints";
import axios from "axios";
import { retrieveToken } from "@utils/RetrieveToken";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: any;
  mobile_number: string;
  short_bio: string;
  gender: string;
  personality: string;
  date_of_birth: string;
  address: string;
  city: string;
  province: string;
  district: string;
  zipcode: string;
  facebook: string;
  line: string;
  instagram: string;
  profile_img: string;
  sub_img_1: string;
  sub_img_2: string;
  sub_img_3: string;
}

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (e) {
  }
  console.log("Token removed");
};
interface SignInResponse {
  message: string;
  success: boolean;
  token: string;
  user: User;
}

const AuthContext = React.createContext<{
  signIn: (response: SignInResponse) => void;
  signOut: () => void;
  verifySession: () => Promise<void>;
  session?: string | null;
  user?: User | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  verifySession: () => Promise.resolve(),
  session: null,
  user: null,
  isLoading: false,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [[, userString], setUserString] = useStorageState("user");

  // Deserialize user object when retrieving from local storage
  const user = userString ? (JSON.parse(userString) as User) : null;

  const signIn = (response: SignInResponse) => {
    console.log("Signing in");
    setSession(response.token);
    setUserString(JSON.stringify(response.user));
  };

  const signOut = async () => {
    setSession(null);
    setUserString(null);
    await removeToken();
    router.replace("/explore");
  };

  const verifySession = async () => {
    const token = await retrieveToken();
    if (!token) {
      signOut();
      return;
    }

    try {
      const apiUrl = getApiUrl(API_ENDPOINTS.CHECK_SESSION);
      await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${session}`,
        },
      });
      console.log("Session verified");
    } catch (error) {
      console.error("Error verifying session:", error);
      signOut();
    }
  };

  useEffect(() => {
    verifySession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        setSession,
        user,
        isLoading,
        verifySession,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
