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
      <Head>
        <title>
          Vextra - Elegant and Animated Portfolio Website
        </title>
        <meta name="description" content="A highly customizable platform ready to be a portfolio page, and become a lot more with some of your own components."/>,
        </title>
        <meta name="og:title" content="Vextra - Elegant and Animated Portfolio Website"/>,
        </title>
        <meta name="og:url" content="/"/>,
        </title>
        <meta name="og:description" content="A highly customizable platform ready to be a portfolio page, and become a lot more with some of your own components."/>,
        </title>
        <meta name="og:image" content="/images/preview.jpg"/>,
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
