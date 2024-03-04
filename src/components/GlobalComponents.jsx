import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MiniHeader from "./MiniHeader";
import MobileHeader from "./MobileHeader";
// import Footer from "./Footer";
import Darkmode from "./Darkmode";

export default function GlobalComponents() {
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
      <Darkmode />
      <Header />
      <MiniHeader />
      <MobileHeader />
      {/* <Footer /> */}
    </>
  );
};
