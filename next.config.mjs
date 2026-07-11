/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.shinan.dev"
          }
        ],
        destination: "https://shinan.dev/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
