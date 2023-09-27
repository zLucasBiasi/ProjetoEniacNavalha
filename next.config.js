/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com", "media.graphassets.com", "2.bp.blogspot.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
