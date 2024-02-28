import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";
import Materials from "./components/pages/Materials";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

import PageNotFound from "./components/pages/404";

import GlobalComponents from "./components/GlobalComponents";

import { Toaster } from "react-hot-toast";

const App = () => {
  const router = createBrowserRouter([
    { path: "*", element: <PageNotFound /> },
    {
      path: "/",
      element: <GlobalComponents />,
      children: [
        { path: "", element: <Home /> },
        { path: "page1", element: <Page1 /> },
        { path: "materials", element: <Materials /> },
        { path: "profile", element: <Profile /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
