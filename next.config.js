/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        domains: [
            'res.cloudinary.com', 
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com'
          ]
    }
}

module.exports = nextConfig
