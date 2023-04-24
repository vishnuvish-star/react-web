import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import "./sign-up.style.css";

const SignUp = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    registerUser,
    registerUserWithGoogle,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    registerUser(e);
    // submit the sign-up GO TO sign-in page
    navigate("/signIn");
  };
  return (
    <div className="sign-in-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="email-container">
          <h2 className="title">Create your account</h2>
          {/* <label htmlFor="name" className="form-text">
            Name
          </label>
          <input
            placeholder="Enter Name"
            type="name"
            value={name}
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input> */}
          <label htmlFor="email" className="form-text">
            Email
          </label>
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
        <div className="form-footer">
          <label htmlFor="password" className="form-text">
            Password
          </label>
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
        <button type="submit" className="form-text btn">
          Submit
        </button>
      </form>

      <button
        onClick={registerUserWithGoogle}
        className="form-text btn google-btn"
      >
        SignUp with Google
      </button>
    </div>
  );
};
export default SignUp;
