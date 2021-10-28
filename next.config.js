/* eslint-disable no-undef */
module.exports = {
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
};
