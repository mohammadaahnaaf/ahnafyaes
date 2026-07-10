/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable SCSS support
  sassOptions: {
    includePaths: ['./src/static/css'],
  },
  // Configure SWC compiler
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
