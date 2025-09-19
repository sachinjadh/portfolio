// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export", // enables static export
//   images: { unoptimized: true }, // since Next Image optimizer doesn’t work with export
//   basePath: "/portfolio", // your repo name
//   assetPrefix: "/portfolio/",
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
