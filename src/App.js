import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

const BASE_URL = "http://127.0.0.1:8000";

const HEADERS = {
  HTTP_X_API_KEY: "P8Up2RQt.EyfwAeFQQ2GtxjFBLqip2RMmjha1Mb9k",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home BASE_URL={BASE_URL} HEADERS={HEADERS} /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
