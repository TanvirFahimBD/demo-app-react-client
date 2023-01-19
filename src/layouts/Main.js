import React from "react";
import { Outlet } from "react-router-dom";

import Headers from "../Pages/Shared/Headers";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
