import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./Components/Register/Register";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
