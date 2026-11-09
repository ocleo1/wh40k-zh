const { base } = require('./constants');
const sidebar = require('./sidebar');

module.exports = {
  title: '战锤40K中文资料集',
  description: '战锤40K中文资料集',
  // base,
  themeConfig: {
    nav: [
      { text: 'Volume I', link: '/volume1/' },
      { text: 'Volume II', link: '/volume2/' },
      { text: 'Volume III', link: '/volume3/' },
      { text: 'Volume IV', link: '/volume4/' }
    ],
    sidebar
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("./markdown-it-disable-url-encode"));
      md.use(require("./markdown-it-merge-cells"));
    }
  },
  chainWebpack: config => {
    // VuePress 1.x 的图片规则没有 i 标志，大写 .JPG/.GIF 会被当作 JS 解析
    config.module.rule('images').test(/\.(png|jpe?g|gif)(\?.*)?$/i)
    config.module.rule('svg').test(/\.(svg)(\?.*)?$/i)
  }
}
