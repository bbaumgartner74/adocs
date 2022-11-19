export default {
  themeConfig: {
    logo: "https://adocs.vercel.app/logo.svg",
    siteTitle: "Adocs",
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", items: [
        { text: "v0.0.1", link: "/item-1" },
        { text: "v0.0.2", link: "/item-2" },
        { text: "v0.0.3", link: "/item-3" },
       ], },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Evavic44/adocs" },
      { icon: "twitter", link: "https://twitter.com/victorekea" },
      { icon: "discord", link: "", target: "_blank" },
    ],
    sidebar: [
      {
        text: "Section A",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Adocs",
    },
  },
    title: "Adocs",
    description: "An awesome docs template built by me",  
    
}