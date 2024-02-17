import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MiniHeader from "./MiniHeader";
// import Footer from "./Footer";

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
      <Header />
      <MiniHeader />
      {/* <Footer /> */}
    </>
  );
};