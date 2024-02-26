/** @type {import('next').NextConfig} */
if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`,
    )
) {
    process.env.LD_LIBRARY_PATH = `${process.env.PWD
        }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    /**
     * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
     * Module parse failed: Unexpected character '�' (1:0)" error
     */
};
module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
};
module.exports = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    webpack: (config) => {
        return Object.assign({}, config, {
            externals: Object.assign({}, config.externals, {
                fs: 'fs',
            }),
            module: Object.assign({}, config.module, {
                rules: config.module.rules.concat([{
                    test: /\.md$/,
                    loader: 'emit-file-loader',
                    options: {
                        name: 'dist/[path][name].[ext]',
                    },
                },
                {
                    test: /\.md$/,
                    loader: 'raw-loader',
                }
                ]),
            }),
        });
    }
};
module.exports = {
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

module.exports = nextConfig