import Head from "../components/Head";
import React, { useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LandingHeader from "../components/landing/LandingHeader";
import LandingBody from "../components/landing/LandingBody";

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
      <LandingHeader />
      <LandingBody />
    </>
  );
};

export default Index;
