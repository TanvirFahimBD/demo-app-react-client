import { sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { useTitle } from "../../hooks/useTitle";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const { createUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useTitle("Register");

  const handleSignUp = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("signup user", user);
        updateProfile(user, { displayName: name });
        // verifyEmail(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(
          error.message
            .split("/")[1]
            .slice(0, error.message.split("/")[1].length - 2)
            .toUpperCase()
            .split("-")
            .join(" ")
        );
        setSuccessMessage("");
      });
  };

  const verifyEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        console.log("verify user", user);
        setSuccessMessage("Verification email send. Verify Now");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("verify error", error);
        setErrorMessage(
          error.message
            .split("/")[1]
            .slice(0, error.message.split("/")[1].length - 2)
            .toUpperCase()
            .split("-")
            .join(" ")
        );
        setSuccessMessage("");
      });
  };

  return (
    <div>
      {/* user info show  */}
      {user?.uid && (
        <div className="text-center">
          <div className="d-flex justify-content-center">
            <img
              src={user.photoURL}
              alt=""
              className="rounded-pill"
              height={100}
              width={100}
            />
          </div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
        </div>
      )}

      {/* sign up */}
      {!user?.uid && (
        <div className="flex flex-col align-items-center my-5 text-light">
          <h3 className="text-dark">Please Sign up</h3>
          <form onSubmit={handleSignUp}>
            <input
              className="block text-center my-3 p-3 rounded"
              type="text"
              name="name"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="block text-center my-3 p-3 rounded"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="block text-center my-3 p-3 rounded"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-secondary my-3 w-100">
              Sign Up
            </button>
            <hr />
          </form>
        </div>
      )}

      {/* toggle log in  */}
      {!user?.uid && (
        <p className="text-center">
          Not have any account <Link to="/log-in">Log in Now</Link>
        </p>
      )}

      {/* success or error message show  */}
      {errorMessage ? (
        <p className="text-center bg-danger my-3 border rounded p-3 text-white">
          {errorMessage}
        </p>
      ) : (
        <p className="text-center bg-success my-3 border rounded p-3 text-white">
          {successMessage}
        </p>
      )}
      <SocialLogin />
    </div>
  );
};

export default SignUp;
