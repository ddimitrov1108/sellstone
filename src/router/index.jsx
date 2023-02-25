import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/services", element: <App /> },
  { path: "/portfolio", element: <App /> },
  { path: "/partners", element: <App /> },
  { path: "/our-team", element: <App /> },
  { path: "*", element: <Navigate to="/" replace /> },
]);
