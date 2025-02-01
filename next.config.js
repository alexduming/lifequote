/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 确保服务端渲染和动态路由正常工作
  trailingSlash: false,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    // 文件系统配置
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;