import Head from "../components/Head";
import React, { useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const Index = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  const handleRedirect = () => {
    auth ? router.push("/home") : router.push("/login");
  };

  useEffect(() => {
    setAuth(localStorage.getItem("Auth"));
  }, []);
  return (
    <>
      <Head />
      <header className="landing-header">
        <div className="heading-box">
          <h1 className="heading">Bloggerx</h1>
          <p className="btn">Get Started</p>
        </div>
      </header>
    </>
  );
};

export default Index;
