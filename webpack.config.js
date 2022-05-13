const path = require('path');

let alias = {
    'SRC': path.resolve(__dirname, 'src'),
    'SCRIPT': path.resolve(__dirname, 'src', 'script'),
    'COMPONENT': path.resolve(__dirname, 'src', 'script', 'component'),
    'LIB': path.resolve(__dirname, 'src', 'script', 'lib')
}


let main = {
    mode: 'development',
    target: 'electron-main',
    entry: path.join(__dirname, 'src', 'script', 'Main.tsx'),
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'src', 'script')
    },
    node: {
        __dirname: false,
        __filename: false
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