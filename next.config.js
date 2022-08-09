/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // GitHub pagesの為に追加
    basePath: process.env.GITHUB_ACTIONS && "/teaser-site",
    trailingSlash: true, // "/about"のようなURLを"/about/"へリダイレクトする(デフォルトは逆)
};

module.exports = nextConfig;
