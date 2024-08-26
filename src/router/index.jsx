import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
    children: [
      { path: "services", element: <App /> },
      { path: "partners", element: <App /> },
      { path: "our-team", element: <App /> },
      { path: "contact-us", element: <App /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ]
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
