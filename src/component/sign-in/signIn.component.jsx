import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import { useContext, useState } from "react";
import "./signIn.style.css";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [error, setError] = useState("");

  const { email, setEmail, password, setPassword, setUser } =
    useContext(UserContext);

  const navigate = useNavigate();
  // const error=()=>{
  //   return
  // }
  const handleSignIn = (event) => {
    event.preventDefault();
    // firebase code
    signInWithEmailAndPassword(auth, email, password)
      .then((registeredUser) => {
        // Signed in
        const user = registeredUser.user;
        console.log(user);
        setUser(user.email);
        navigate("/shop");
        setEmail("");
        setPassword("");

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // error.code === "auth/user-not-found"
        //   ? setError("user not found")
        //   : setError("password/E-mail not match");

        // Error set to setError
        setError(
          error.code === "auth/user-not-found"
            ? "User Not Found"
            : "Password/Email Not Match"
        );
      });
  };

  // const nav = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        navigate("/signIn");
        setEmail("");
        setPassword("");
        setUser("guest");
      })
      .catch((error) => {
        console.log("An error happened.");
        // An error happened.
      });
  };
  return (
    <div className="sign-in-container">
      <h1 className=" title">Sign In With Your Account</h1>
      {error ? <h2 className="error-msg">{error}</h2> : null}
      <form onSubmit={handleSignIn} className="form-container">
        <div>
          <label htmlFor="email" className="form-text">
            Email
          </label>
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
          <label htmlFor="password" className="form-text">
            Password
          </label>

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
          <button type="submit" className="form-text btn">
            Submit
          </button>
        </div>
      </form>

      <div className="form-footer">
        <div className="sign-out">
          <button onClick={handleSignOut} className="form-text btn">
            Sign Out
          </button>
        </div>

        <p>
          Don't Have a Account? Create
          <Link to={"/signUp"} className="link">
            <span>Sign-up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
