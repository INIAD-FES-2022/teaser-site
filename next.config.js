/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // GitHub pagesの為に追加
    basePath: process.env.GITHUB_ACTIONS && "/teaser-site",
    trailingSlash: true, // "/about"のようなURLを"/about/"へリダイレクトする(デフォルトは逆)

    // "next export" で制的サイトを出力する為に画像の最適化を切る
    experimental: {
        images: {
            unoptimized: true,
        },
    },
};
module.exports = nextConfig;
