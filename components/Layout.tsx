import React from "react";
import { MetaProps } from "../types/layout";
import Head from "./Head";
import Navigation from "./Navigation";
import { useSession } from "next-auth/client";
type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Navigation />
      <></>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          Built by{" "}
          <a
            className="text-gray-900 dark:text-white"
            href="https://www.learnforcause.com/"
          >
            Learn For Cause | Open Sourc
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
