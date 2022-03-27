import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { User } from "@firebase/auth";
import { auth } from "../firebase";
import { handleFirebaseAuthError } from "helpers/handleFirebaseAuthError";

interface AuthContextInterface {
  user: User | null;
  isAuthLoading: boolean;
  logIn: (
    data: {
      email: string;
      password: string;
    },
    onError: Function
  ) => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const logIn = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    onError: Function
  ) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      const message = handleFirebaseAuthError(error.code);
      onError(message);
    });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthLoading(false);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthLoading, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
