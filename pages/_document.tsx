import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import React from "react";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
