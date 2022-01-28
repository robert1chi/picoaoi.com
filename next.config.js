/** @type {import('next').NextConfig} */
export const i18n = {
  locales: ["en-US", "zh-CN", "ja"],
  defaultLocale: "en-US",
}
export const reactStrictMode = true
export async function generateBuildId() {
  return 'v1'
}
