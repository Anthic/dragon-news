import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import CategoryNew from "../Pages/CategoryNew";
import AuthLayout from "../Layouts/AuthLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNew></CategoryNew>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News layout</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <h1>Login page</h1>,
      },
      {
        path: "/auth/register",
        element: <h1>Register page</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 error;</h1>,
  },
]);

export default Routes;