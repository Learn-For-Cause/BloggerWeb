import Navigation from "./Navigation";
import React from "react";
import Head from "./Head";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
