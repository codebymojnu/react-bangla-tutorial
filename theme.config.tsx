import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

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
};

export default config;
