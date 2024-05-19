// 'use strict';

// change the .mjs file to .js file
// use domains and not remotePatterns

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["github.com"],
    },
};

module.exports = nextConfig;
