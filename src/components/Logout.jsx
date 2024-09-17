import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100 z-10`,
};

const Logout = () => {
  const signOutUser = () => {
    auth.signOut();
  };
  return (
    <button onClick={signOutUser} className={style.button}>
      Logout
    </button>
  );
};

export default Logout;
