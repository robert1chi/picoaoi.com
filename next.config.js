/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en-US", "zh-CN", "ja"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'v1'
  }
}
