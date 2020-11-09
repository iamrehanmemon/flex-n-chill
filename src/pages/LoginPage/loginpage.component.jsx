import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./loginpage.style.scss";

const LoginPage = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
