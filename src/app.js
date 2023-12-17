import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Particlebg from "./components/Particlebg";

const AppLayout = () => {
  return (
    <>
      <Particlebg />
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
