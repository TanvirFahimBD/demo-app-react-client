import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { postLoaders } from "../../Loaders/postLoaders";
import Main from "../../layouts/Main";
import Shop from "../../Pages/Shop/Shop";
import Home from "../../Pages/Home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Orders from "../../Pages/Shop/Orders";
import Inventory from "../../Pages/Shop/Inventory";
import About from "../../Pages/About/About";
import SignUp from "../../Pages/Login/SingUp";
import Login from "../../Pages/Login/Login";
import ForgetPassword from "../../Pages/Login/ForgetPassword";
import AddUser from "../../Pages/Dashboard/Admin/AddUser";
import WithoutFooter from "../../layouts/WithoutFooter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        loader: postLoaders,
        element: <Shop />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      { path: "/inventory", element: <Inventory /> },
      {
        path: "/about",
        element: (
          <About>
            <p>Passing Children. Need? User it.</p>
          </About>
        ),
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
    ],
  },
  {
    path: "/log-in",
    element: <WithoutFooter />,
    children: [
      {
        path: "/log-in",
        element: <Login />,
      },
    ],
  },
]);
