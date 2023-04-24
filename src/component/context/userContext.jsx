import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, app } from "../../utils/firebase.config";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("guest");

  const provider = new GoogleAuthProvider(app);

  const registerUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // user.displayName ? setUser(user.displayName) : setUser(user.email);
        setEmail("");
        setPassword("");

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);

        // ..
      });
  };

  const registerUserWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);

        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        registerUser,
        registerUserWithGoogle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
