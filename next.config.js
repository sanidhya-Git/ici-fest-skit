/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: [
    "uploadthing",
    "@uploadthing/react",
    "@uploadthing/shared",
    "@uploadthing/mime-types",
  ],
  turbo: {
    rules: {
      "**/*.md": {
        loaders: ["null-loader"],
        as: "*.js",
      },
      "**/*.d.cts": {
        loaders: ["null-loader"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

export default config;
