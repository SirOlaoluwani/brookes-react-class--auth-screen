import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "auth",
    element: <Auth />,
  }
]);


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}