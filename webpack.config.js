module.exports = {
  entry: {
    app: "./src/js/app.js",
  },
  output: { // ファイルの出力設定
    path: __dirname + "/build/js/", //  出力ファイルのディレクトリ名
    filename: 'bundle.js' // 出力ファイル名
  }
};
