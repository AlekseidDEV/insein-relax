const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = ext => (isDev ? `[name].${ext}` : `[name].[chunkhash].${ext}`)

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './layout/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist')
    }
}
