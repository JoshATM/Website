import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

import PageNotFound from "./components/pages/404";

import GlobalComponents from "./components/GlobalComponents";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalComponents />,
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <PageNotFound /> },
        { path: "page1", element: <Page1 /> },
        { path: "page2", element: <Page2 /> },
        { path: "profile", element: <Profile /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
