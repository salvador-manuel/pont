/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'lens.infura-ipfs.io',
            'statics-mumbai-lens-staging.s3.eu-west-1.amazonaws.com',
            'avatar.tobi.sh',
            'statics-polygon-lens-staging.s3.eu-west-1.amazonaws.com',
            's2.coinmarketcap.com',
            'www.conclusion.com.ar',
            'pxb.cdn.eldiariodelarepublica.com',
            '',
        ],
    },
};

module.exports = nextConfig;
