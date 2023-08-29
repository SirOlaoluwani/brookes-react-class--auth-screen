import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}