module.exports = {
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
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    // friendLink: [
    //   {
    //     title: "午后南杂",
    //     desc: "Enjoy when you can, and endure when you must.",
    //     email: "1156743527@qq.com",
    //     link: "https://www.recoluan.com",
    //   },
    //   {
    //     title: "vuepress-theme-reco",
    //     desc: "A simple and beautiful vuepress Blog & Doc theme.",
    //     avatar:
    //       "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: "https://vuepress-theme-reco.recoluan.com",
    //   },
    // ],
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
