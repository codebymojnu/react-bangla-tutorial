import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>React Bangla Tutorial</span>,
  project: {
    link: "https://github.com/codebymojnu/react-bangla-tutorial",
  },
  chat: {
    link: "https://discord.com/mojnu13",
  },
  docsRepositoryBase: "https://github.com/codebymojnu/react-bangla-tutorial",
  footer: {
    text: "React Bangla Tutorial",
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – React Bangla Tutorial",
      };
    }
    return { titleTemplate: "React Bangla Tutorial" };
  },
  head: () => {
    const { asPath } = useRouter();
    const { route } = useRouter();
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://react-bangla.vercel.app" />
        <meta
          property="og:url"
          content={`https://react-bangla.vercel.app${asPath}`}
        />
        <meta name="theme-color" content="#ff3d00" />
        <meta property="og:site_name" content="React Bangla" />
        <meta name="og:title" content="React Bangla Tutorial" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/png" href="/Images/favicon/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="keywords" content="React, Bangla, Tutorial" />
        <meta
          property="description"
          content={
            meta.description ||
            "React Bangla Tutorial অনুসরণ করে রিয়েক্ট শিখুন."
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "React Bangla Tutorial অনুসরণ করে রিয়েক্ট শিখুন."
          }
        />
      </>
    );
  },
};

export default config;
