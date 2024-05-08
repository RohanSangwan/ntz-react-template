import { redirect } from "react-router-dom";
import Login from "src/pages/login";
import Dashboard from "src/pages/dashboard";
import Layout from "src/components/layout";

export const routesConfig = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/login");
      }
      return true;
    },
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
];
