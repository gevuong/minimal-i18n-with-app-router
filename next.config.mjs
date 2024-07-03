/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/minimal-i18n-with-app-router' : '',
};

export default nextConfig;
