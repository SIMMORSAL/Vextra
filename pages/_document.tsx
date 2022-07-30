import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default function _Document() {
  // static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  //   const initialProps = await Document.getInitialProps(ctx);
  //
  //   return initialProps;
  // }

  return (
    <Html lang="en">
      <Head>{/*<title>TITLE</title>*/}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
