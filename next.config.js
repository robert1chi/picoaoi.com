/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'v1'
  }
}
