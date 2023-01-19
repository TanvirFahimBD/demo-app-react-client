import { sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { useTitle } from "../../hooks/useTitle";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { auth, signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useTitle("Login");

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("logged user", user);
        navigate(from, { replace: true });
        setSuccessMessage("Login successfully");
        setErrorMessage("");
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

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Reset Password mail send. Reset now.");
        setErrorMessage("");
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
          <h3 className="text-dark">Please Login</h3>
          <form onSubmit={handleLogin}>
            <input
              className="block text-center my-3 p-3 rounded"
              type="email"
              name="email"
              placeholder="Enter Email"
              onBlur={(e) => setEmail(e.target.value)}
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
            {/* forget password  */}
            {!user?.uid && (
              <p className="text-center">
                <Link to="/forget-password">Forget password</Link>
              </p>
            )}
            <button type="submit" className="btn btn-secondary my-3 w-100">
              login
            </button>
            <hr />
          </form>
        </div>
      )}

      {/* signup toggle  */}
      {!user?.uid && (
        <p className="text-center">
          Not have any account <Link to="/sign-up">Sign Up Now</Link>
        </p>
      )}

      {/* forget password  */}
      {!user?.uid && (
        <p className="text-center">
          <button
            className="btn btn-secondary mx-4"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
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

export default Login;
