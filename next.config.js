// const path = require('path')

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'standalone',
//     experimental: { esmExternals: true},
//     reactStrictMode: false,
//     images: {
//         remotePatterns: [
//           {
//             hostname: "ss3.vitanur.com"
//           },
//         ],
//     },
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
// }

// module.exports = nextConfig

// test ucun yazmisam her scss faylinda import elememek ucun

// const path = require("path");
  const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: { esmExternals: true },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "totalvitanurdev.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
  // scss fayllarına main.module.scss faylını avtomatik import edir
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  //   prependData: `@import '${path.resolve(
  //     __dirname,
  //     "styles/main.module.scss"
  //   )}';`,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/main.module.scss";`,
  },
};

module.exports = nextConfig;
