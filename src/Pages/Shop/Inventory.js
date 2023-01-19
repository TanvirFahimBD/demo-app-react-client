import React from "react";
import { useTitle } from "../../hooks/useTitle";

const Inventory = () => {
  useTitle("Inventory");
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Inventory</h1>
    </div>
  );
};

export default Inventory;
