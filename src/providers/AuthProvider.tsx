import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  signOut,
} from "firebase/auth";
import { User } from "@firebase/auth";

interface AuthContextInterface {
  user: User | null;
  isAuthLoading: boolean;
  logIn: (
    data: { email: string; password: string },
    onSuccess: VoidFunction
  ) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const auth = getAuth();

  useMemo(() => {
    if (process.env.NODE_ENV !== "production") {
      connectAuthEmulator(auth, "http://localhost:9099");
    }
  }, [auth]);

  const logIn = (
    { email, password }: { email: string; password: string },
    onSuccess: VoidFunction
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onSuccess();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
      console.log(user);
    });
  }, [auth]);
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
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
