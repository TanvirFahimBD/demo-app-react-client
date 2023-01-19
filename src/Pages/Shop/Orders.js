import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import { useTitle } from "../../hooks/useTitle";

const Orders = () => {
  useTitle("Orders");
  const { user } = useContext(AuthContext);
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Orders by {user?.displayName}</h1>
    </div>
  );
};

export default Orders;
