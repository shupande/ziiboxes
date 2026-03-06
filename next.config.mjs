/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 原生支持配置
  output: 'export',
  
  // 禁用某些需要 Node.js 的功能
  images: {
    unoptimized: true,
  },
  
  // 确保兼容性
  trailingSlash: true,
};

export default nextConfig;
