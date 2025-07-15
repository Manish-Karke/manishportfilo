import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";

const route = createBrowserRouter([{ path: "/", element: <Home /> }]);

export const AppConfig = () => {
  return <RouterProvider router={route} />;
};
