import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";

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
        { path: "page3", element: <Page3 /> },
        { path: "page4", element: <Page4 /> },
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
