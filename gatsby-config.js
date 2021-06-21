module.exports = {
  siteMetadata: {
    title: 'Animation demo',
  },
  plugins: [
  'gatsby-plugin-postcss',
  'gatsby-plugin-transition-link',
  'gsap',
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaultQuality: 100,
    },
  },
  `gatsby-transformer-sharp`],
};
