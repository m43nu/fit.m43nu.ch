require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `HomeFit`,
    siteTitleAlt: `HomeFit - m43nu`,
    siteUrl: `https://fit.m43nu.ch`,
    author: `@m43nu`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    siteDescription: `Simple Crossfit & Fitness Workouts to do at home, inspired by COMPTRAIN.`,
    siteHeadline: `HomeFit Blog by m43nu`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/m43nu`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/m43nu/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HomeFit by m43nu`,
        short_name: `home-fit-m43nu`,
        description: `Simple Crossfit & Fitness Workouts to do at home, inspired by COMPTRAIN.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
