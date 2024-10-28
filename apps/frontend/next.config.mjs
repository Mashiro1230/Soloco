import dotenv from "dotenv";
dotenv.config();

/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
        SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
        NEXT_PUBLIC_REGION: process.env.NEXT_PUBLIC_REGION,
        NEXT_PUBLIC_S3_BUCKET_NAME: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
    },
};

export default nextConfig;
