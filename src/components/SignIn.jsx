import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
};

const SignIn = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleAuthChange = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user = auth.currentUser;
      setUser(user);
    };
    handleAuthChange();
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
