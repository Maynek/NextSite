/** @type {import('next').NextConfig} */
const nextConfig = {
	//output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
		  	},
		],
	},
	experimental: {
		scrollRestoration: true
	},
};
export default nextConfig;
