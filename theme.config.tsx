import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = (
  <div className="flex items-center">
    <img className="w-8 h-8" src="/assets/link-drop.png" alt="" />
    <p className="text-lg font-medium ml-4">LinkDrop</p>
  </div>
);

const config: DocsThemeConfig = {
  project: {
    link: "",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra/tree/main/docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Doc",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Setup LinkDrop easily by following this documentation."
        />
        <meta
          name="og:description"
          content="Setup LinkDrop easily by following this documentation."
        />
        <meta name="og:title" content={title ? title + " – Doc" : "Doc"} />
        <meta name="apple-mobile-web-app-title" content="LinkDrop" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: "",
  },
  feedback: {
    content: "",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full items-center justify-between">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://vercel.com?utm_source=nextra.site"
          >
            <span>Powered by </span>
            <span>UI-Lib</span>
          </a>
        </div>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} LinkDrop</p>
      </div>
    ),
  },
};

export default config;
