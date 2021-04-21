// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: "https://manningb.com",
};

module.exports = {
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-253436724",
      },
    ],
    ["feed", feed_options],
  ],
  base: "/",
  title: "Brian Manning",
  description: "Welcome to my Personal Website!",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    noFoundPageByTencent: false,
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          // {
          //   text: "Contact Form",
          //   link: "/pages/contact/",
          //   icon: "reco-message",
          // },
          {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/manning-brian/",
            icon: "reco-linkedin",
          },
          {
            text: "Email",
            link:
              "mailto:manningbrian98@gmail.com?subject=Email from manningb.com",
            icon: "reco-mail",
          },
          {
            text: "GitHub",
            link: "https://github.com/manningb",
            icon: "reco-github",
          },
        ],
      },
      {
        text: "GitHub",
        link: "https://github.com/manningb",
        icon: "reco-github",
      },
      {
        text: "About",
        link: "/pages/About/",
        icon: "reco-account",
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    sidebarDepth: 3,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Categories",
      },
      tag: {
        location: 3,
        text: "Tags",
      },
    },
    logo: "/avatar.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Brian Manning",
    authorAvatar: "/avatar.png",
    record: "xxxx",
    startYear: "2021",
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: true,
  },
};
