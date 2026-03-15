import React, { Suspense } from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<Loader />}>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Root;
