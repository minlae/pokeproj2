module.exports = {
  cache: {
    cacheId: "pokeproj2",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "pokeproj2",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
