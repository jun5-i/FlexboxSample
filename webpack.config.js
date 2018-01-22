var path = require('path');

module.exports = {
    entry: {
        export: path.join(__dirname, '/scripts/lib/export.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/scripts')
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: 'source-map'
};