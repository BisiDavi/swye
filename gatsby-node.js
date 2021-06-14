const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@json': path.resolve(__dirname, 'src/json'),
                '@containers': path.resolve(__dirname, 'src/containers'),
                '@images': path.resolve(__dirname, 'src/images'),
            },
        },
    });
};
