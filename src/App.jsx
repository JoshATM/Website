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
  const isLoggedIn = localStorage.getItem("LoggedIn") === "true";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalComponents />,
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <PageNotFound /> },
        { path: "page1", element: isLoggedIn ? <Page1 /> : <Login /> },
        { path: "page2", element: isLoggedIn ? <Page2 /> : <Login /> },
        { path: "profile", element: isLoggedIn ? <Profile /> : <Login /> },
        { path: "register", element: isLoggedIn ? <Profile /> : <Register /> },
        { path: "login", element: isLoggedIn ? <Profile /> : <Login /> },
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
