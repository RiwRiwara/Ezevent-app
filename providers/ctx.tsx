import React from 'react';
import { useStorageState } from './useStorageState';

interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: any; 
}

interface SignInResponse {
  message: string;
  success: boolean;
  token: string;
  user: User;
}

const AuthContext = React.createContext<{
  signIn: (response: SignInResponse) => void;
  signOut: () => void;
  session?: string | null;
  user?: User | null; // Add user property to store user data
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  user: null,
  isLoading: false,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const [[, userString], setUserString] = useStorageState('user'); 

  // Deserialize user object when retrieving from local storage
  const user = userString ? JSON.parse(userString) as User : null;

  const signIn = (response: SignInResponse) => {
    setSession(response.token);
    setUserString(JSON.stringify(response.user)); 
  };

  const signOut = () => {
    setSession(null);
    setUserString(null); 
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        user,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
