/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['loremflickr.com', 'cloudflare-ipfs.com']
    }
}
const SERVER_URL = process.env.SERVER_URL
module.exports = nextConfig
