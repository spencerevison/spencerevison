module.exports = {
  siteMetadata: {
    defaultTitle: "Gatsby Starter",
    defaultTitleTemplate: "%s | Gatsby Starter",
    defaultDescription: "",
    siteUrl: "https://www.site-url.com",
    defaultImage: "/images/social.jpg",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "88fb2eca14288f39ec9e58e1edada2",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          components: "src/components",
          pages: "src/pages",
          svg: "static/images/svg",
          "site.config.json": "src/site.config.json",
          styles: "src/styles",
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "500", "800"],
            },
          ],
        },
      },
    },
  ],
};
