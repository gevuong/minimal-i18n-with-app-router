/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */

  output: 'export',

  /**
   * Set base path. This is the slug of your GitHub repository.
   * For example, if the Github repo is named 'xyz', then by default,
   * the site will be deployed to https://user.github.io/xyz.
   * This means basePath should be be set to '/xyz'.
   *
   * Note: If a custom domain is used (ie. virufy.org), basePath can be removed
   * or set to an empty string.
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: isProd ? '/minimal-i18n-with-app-router' : '',

  /**
   * Add basic configs to optimize static images at build time
   *
   * @see https://github.com/Niels-IO/next-image-export-optimizer?tab=readme-ov-file#basic-configuration
   */
  images: {
    loader: 'custom',
    imageSizes: [256, 384],
    deviceSizes: [750, 1080, 1920, 3840],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};

export const { basePath } = nextConfig;
export default nextConfig;
