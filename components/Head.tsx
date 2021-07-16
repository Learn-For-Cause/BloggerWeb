import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { MetaProps } from "../types/layout";

export const WEBSITE_HOST_URL = "https://nextjs-typescript-mdx-blog.vercel.app";

const Head = () => {
  return (
    <NextHead>
      <title>Blogger Web</title>
    </NextHead>
  );
};

export default Head;
