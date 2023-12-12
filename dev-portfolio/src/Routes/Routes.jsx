import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <div className="text-5xl flex justify-center items-center min-h-screen text-green-500 font-extrabold">
            Home Page Welcome
          </div>
        ),
      },
      {
        path: "about-me",
        element: (
          <div className="text-5xl flex justify-center items-center min-h-screen text-green-500 font-extrabold">
            About me
          </div>
        ),
      },
      {
        path: "projects",
        element: (
          <div className="text-5xl flex justify-center items-center min-h-screen text-green-500 font-extrabold">
            Projects
          </div>
        ),
      },
      {
        path: "services",
        element: (
          <div className="text-5xl flex justify-center items-center min-h-screen text-green-500 font-extrabold">
            Services
          </div>
        ),
      },
      {
        path: "contact",
        element: (
          <div className="text-5xl flex justify-center items-center min-h-screen text-green-500 font-extrabold">
            Contact
          </div>
        ),
      },
    ],
  },
]);
