import { useAppSelector } from "../redux/hooks";
import BlogList from "../components/BlogList";
import { useSession } from "next-auth/client";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Login from "./login";
import React, { useEffect, useState } from "react";
import Landing from './landing';
export const Index = () => {
  const [session] = useSession();
  const myCustomSession = useAppSelector((state) => state.sessionState).value;

  if (!session && Object.keys(myCustomSession).length === 0) {
    return (
      <>
        <Landing />
      </>
    );
  } else {
    return (
      <>
        <Layout>
          <Header />
          <BlogList />
        </Layout>
      </>
    );
  }
};

export default Index;
