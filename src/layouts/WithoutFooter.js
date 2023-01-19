import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../Pages/Shared/Headers";

const WithoutFooter = () => {
  return (
    <div>
      <Headers />
      <Outlet />
    </div>
  );
};

export default WithoutFooter;
