import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // assetPrefix: "/blog",
  // basePath: "/blog",
  // assetPrefix: "https://krmangalam.netlify.app",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "truthful-cabbage-82fd27e8f6.media.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "techapi.krmangalam.edu.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.krmangalam.edu.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wp.krmangalam.edu.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "krmangalam.edu.in",
        pathname: "/**",
      },
    ],
  },
   async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Clickjacking protection
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self';",
          },
          // Referrer-Policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Anti-sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Anti-XSS (Legacy)
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Permissions-Policy (Feature Policy)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  //  async rewrites() {
  //   return [
  //     {
  //       source: "/KRMU_QS/:path*",
  //       destination: "/api/r2/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   basePath: '/krm-2-test',
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
