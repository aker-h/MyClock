const path = require('path');

let alias = {
    'SRC': path.resolve(__dirname, 'src'),
    'SCRIPT': path.resolve(__dirname, 'src', 'script'),
    'LIB': path.resolve(__dirname, 'src', 'script', 'lib'),
    'COMPO': path.resolve(__dirname, 'src', 'script', 'compo')
}


let main = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'script', 'Main.tsx'),
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'src', 'script')
    },
    module: {
        rules: [{
            test: /\.(ts||tsx)$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_module')
            ],
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: alias
    }
};

module.exports = [
    main
]