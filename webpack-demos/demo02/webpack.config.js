module.exports = {
  entry: { // 多入口文件
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
