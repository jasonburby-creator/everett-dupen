/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows <Image> with local /public files (no external domains needed).
    // If you ever want to fall back to the weserv.nl proxy for any image,
    // add "images.weserv.nl" to remotePatterns below.
    remotePatterns: [],
  },
};
export default nextConfig;
