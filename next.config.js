/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['loremflickr.com']
    }
}
const SERVER_URL = process.env.SERVER_URL
module.exports = nextConfig
