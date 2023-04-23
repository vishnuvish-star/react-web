import { useState } from "react";
import "./sign-in.style.css";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="sign-in-container" onSubmit={signIn}>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default SingUp;
