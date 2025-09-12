import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import childRoute from "./childRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:childRoute
  },
]);

export default router;