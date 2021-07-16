import React from "react";
import { MetaProps } from "../types/layout";
import Head from "./Head";
import Navigation from "./Navigation";

const Layout = ({ children, customMeta }) => {
  return (
    <>
      <Head />
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
