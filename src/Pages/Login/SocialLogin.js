import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { user, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        navigate("/");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.message);
      });
  };

  const handleGithubSingIn = () => {
    githubSignIn()
      .then((result) => {
        navigate("/");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.message);
      });
  };

  return (
    <div className="text-center my-4">
      {/* sign in pop up & sign out */}
      {!user?.uid && (
        <div className="text-center">
          <button
            className="btn btn-secondary mx-3"
            onClick={handleGoogleSingIn}
          >
            Google Login
          </button>
          <button className="btn btn-secondary" onClick={handleGithubSingIn}>
            Github Login
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
