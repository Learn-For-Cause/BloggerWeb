import Head from "../components/Head";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LandingHeader from "../components/landing/LandingHeader";
import LandingBody from "../components/landing/LandingBody";
import LandingContactUs from "../components/landing/landingContactUs";

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
      <LandingHeader handleGetStarted={() => handleRedirect()} />
      <LandingBody />
      <LandingContactUs />
    </>
  );
};

export default Index;
