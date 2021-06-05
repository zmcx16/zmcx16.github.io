module.exports = {
  pathPrefix: `/plugin-react`,
  siteMetadata: {
    title: `zmcx16's side project`,
    description: `zmcx16's side project website`,
    author: `@zmcx16`,
    siteUrl: `https://project.zmcx16.moe/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zmcx16's side project`,
        description: `zmcx16's side project website`,
        short_name: `zmcx16-project`,
        start_url: `/`,
        background_color: `#1a3664`,
        theme_color: `#1a3664`,
        display: `standalone`,
        icon: `src/images/zmcx16_logo.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
