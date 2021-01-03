// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Micah Fukazawa | Developer',
  plugins: [
    // {
    //   use: "@gridsome/source-contentful",
    //   options: {
    //     space: process.env.CONTENTFUL_SPACE,
    //     accessToken: process.env.CONTENTFUL_TOKEN,
    //     host: "cdn.contentful.com",
    //     environment: process.env.CONTENTFUL_ENVIRONMENT,
    //     typename: "Contentful"
    //   }
    // },
    {
      use: "gridsome-plugin-tailwindcss"
    }
  ],
  // templates: {
  //   ContentfulBlogPost: '/blog/:slug',
  // }
}
