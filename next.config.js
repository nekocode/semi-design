/** @type {import('next').NextConfig} */
let nextConfig = {
  output: "standalone",
  trailingSlash: true,
  transpilePackages: [
    "@douyinfe/semi-ui",
    "@douyinfe/semi-icons",
    "@douyinfe/semi-illustrations",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
};

const semi = require("@douyinfe/semi-next").default({
  omitCss: true,
});

nextConfig = semi(nextConfig);

module.exports = nextConfig;
