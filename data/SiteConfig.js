module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Benji's Blog", // Site title.
  siteTitleAlt: "Benji Fischman's Personal Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://BenjiFischman.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A Personal Blog with Human Computer Interactions in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "https://benjifischman.disqus.com", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Benji Fischman", // Username to display in the author segment.
  userTwitter: "benji_fischman", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Minneapolis, MN", // User location to display in the author segment.
  userAvatar: "../logos/headshot.jpg", // User avatar to display in the author segment.
  userDescription:
    "Hey, my name is Benji, and I like to build stuff. In particular, stuff that impacts real human beings on a daily basis. This blog is meant to serve as a personal journal of the things I create. Stuff includes, but is not limited to, data visulizations, mobile apps, games, research, and jokes.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/BenjiFischman",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/benji_fischman",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "benjidevrel@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Benji Fischman", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
