import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Link to="/" className="mx-5">
        Home
      </Link>
      <Link to="/shop" className="mx-5">
        Shop
      </Link>
      <Link to="/orders" className="mx-5">
        Orders
      </Link>
      <Link to="/inventory" className="mx-5">
        Inventory
      </Link>
      <Link to="/about" className="mx-5">
        About
      </Link>
      <Link to="/add-user" className="mx-5">
        Add User
      </Link>
      {!user?.uid && (
        <Link to="/sign-up" className="mx-5">
          Sign Up
        </Link>
      )}
      {user?.uid && <span>Welcome, {user?.displayName?.split(" ")[0]}</span>}
      {/* sign out  */}
      {user?.uid && (
        <button className="btn btn-secondary m-3" onClick={handleSignOut}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Headers;
