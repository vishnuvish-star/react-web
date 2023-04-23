import { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../utils/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      console.log("password not match");
      return "password error";
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // toast.success("user created");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            value={password}
          />
        </div>
        <div>
          <label htmlFor="confirm-password"> confirm-password</label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            id="confirm-password"
            value={confirmPassword}
          />
        </div>
        <div>
          <button type="submit"> submit</button>
        </div>
      </form>
      <div>{registerUser}</div>
    </>
  );
};

export default SignIn;
