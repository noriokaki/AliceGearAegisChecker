const withPWA = require("next-pwa");

/* eslint-disable no-undef */
module.exports = withPWA({
   webpack5: true,
   reactStrictMode: true,
   poweredByHeader: false,
   webpack: (config) => {
      config.resolve.fallback = {
         fs: false,
         path: false,
         process: false,
      };

      return config;
   },
   pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
      publicExcludes: ["!favicons/**/*", "!images/actresses/**/*"]
   }
});
