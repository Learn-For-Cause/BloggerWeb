import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { PostType } from "../types/post";
import { useSession } from "next-auth/client";
import Login from "./login";
// import Publications from "../components/Publications";
import Header from "../components/Header";

export const Index = () => {
  const [session] = useSession();

  if (!session) {
    //after signup it will change
    return (
      <>
        <Login />
      </>
    );
  } else {
    return (
      <Layout>
        <Header />
        {/* <Publications /> */}
        <h1>Home Page</h1>
        <p>Next.js starter for your next blog or personal site. Built with:</p>
        <ul className="list-disc pl-4 my-6">
          <li>Next.js</li>
          <li className="mt-2">Typescript</li>
          <li className="mt-2">MDX</li>
          <li className="mt-2">Tailwind CSS</li>
        </ul>
        <a
          href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
          className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
        >
          Get the source code!
        </a>
      </Layout>
    );
  }
};

export default Index;
