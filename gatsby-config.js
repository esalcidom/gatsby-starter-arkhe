module.exports = {
  siteMetadata: {
    title: `gatsby-starter-arkhe`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `description for your site`,
    image: `../images/favicon.png`
  },
  plugins: [
    "gatsby-plugin-netlify-cms", 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "asdfgasdfsdzf"
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/content`
      },
      __key: "content"
    }
  ]
};