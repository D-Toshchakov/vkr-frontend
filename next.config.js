/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['loremflickr.com', 'cloudflare-ipfs.com', "www.google.com", "c.dns-shop.ru"]
    }
}
const SERVER_URL = process.env.SERVER_URL
module.exports = nextConfig
