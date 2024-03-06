import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Header from "./Header";
import MiniHeader from "./MiniHeader";
import MobileHeader from "./MobileHeader";
// import Footer from "./Footer";

const unauthedRoutes = ["", "login", "register"];

export default function GlobalComponents() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("LoggedIn") === "true";
  const isUnauthedRoute = unauthedRoutes.includes(
    location.pathname.split("/")[1]
  );
  if (!isLoggedIn && !isUnauthedRoute) {
    console.log("unauthed route detected, redirecting to login...");
    return <Navigate to="/login" />;
  }
  return (
    <>
      <DisplayAll />
      <Outlet />
    </>
  );
}

const DisplayAll = () => {
  return (
    <>
      <Header />
      <MiniHeader />
      <MobileHeader />
      {/* <Footer /> */}
    </>
  );
};
