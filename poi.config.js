const path = require('path')
const pkg = require('./package')

module.exports = {
  presets: [
    require('poi-preset-resolve-alias')({
      Vue: 'vue/dist/vue.common.js'
    }),
    require('poi-preset-bundle-report')(),
    require('poi-preset-offline')({
      pwa: './src/pwa.js', // Path to pwa runtime entry
      pluginOptions: {} // Additional options for offline-plugin
    })
  ],
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {

  },
  plugins: [
    "element-ui",
    "theme-chalk"
  ]
}
