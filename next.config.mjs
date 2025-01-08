/** @type {import('next').NextConfig} */
const nextConfig = {
	//output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
		  	},
			{
				protocol: 'https',
				hostname: 'adasworks.pages.dev',
		  	},
		],
	},
	experimental: {
		scrollRestoration: true
	},
};
export default nextConfig;
