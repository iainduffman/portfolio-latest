module.exports = {
  siteMetadata: {
    title: 'Animation demo',
  },
  plugins: [
  'gatsby-plugin-postcss',
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.inline\.svg$/
      }
    }
  },
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
