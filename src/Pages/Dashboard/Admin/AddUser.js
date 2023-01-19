import React, { useState } from "react";
import { useTitle } from "../../../hooks/useTitle";

const AddUser = () => {
  useTitle("Add User");

  const [user, setUser] = useState({});

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log("pre user", user);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[name] = value;
    console.log("newUser", newUser);
    setUser(newUser);
  };

  return (
    <div style={{ minHeight: "100vh" }} className="text-light">
      <h1>Add User</h1>
      <div className="d-flex justify-center">
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onBlur={handleBlur}
            className="block my-4 py-3 px-4  rounded w-100 "
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onBlur={handleBlur}
            className="block my-4 py-3 px-4   rounded w-100"
          />
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            onBlur={handleBlur}
            className="block my-4 py-3 px-4 rounded w-100"
          />
          <input
            type="submit"
            value="Add User"
            className="btn btn-primary block w-100 py-3 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
