import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

// const actionCodeSettings = {
//     // URL to redirect the user to after email verification is complete.
//     url: "http://localhost:3000/login",
//     // This must be true for the email verification link to work.
//     handleCodeInApp: true,
//   };

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const emailSignUp = async (email, password, firstName, lastName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      // Update the user profile with first and last names
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: "https://media.discordapp.net/attachments/607993377853800459/1102309820285075466/Default-Profile-Picture-PNG-Download-Image.png?width=858&height=904",
      });
  
      // Return a success message or user data if needed
      return { success: true };
  
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        return { success: false, error: "Email already in use" };
      }
      return { success: false, error: "Unknown Error" };
    }
  };

  const emailSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in with email and password:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, emailSignUp, emailSignIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
