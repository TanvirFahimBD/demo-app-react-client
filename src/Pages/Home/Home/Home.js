import React from "react";
import { useTitle } from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";

const Home = () => {
  useTitle("Home");
  return (
    <div style={{ minHeight: "100vh" }}>
      <Banner />
    </div>
  );
};

export default Home;
