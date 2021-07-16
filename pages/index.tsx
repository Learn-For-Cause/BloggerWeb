import BlogList from "../components/BlogList";
import { useSession } from "next-auth/client";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Login from "./login";
import React from "react";

export const Index = () => {
  const [session] = useSession();

  if (!session) {
    return (
      <>
        <Login />
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
