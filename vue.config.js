const { defineConfig } = require("@vue/cli-service");
const prd = process.env === "production";
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./docs",
  publicPath: prd ? "/vue-widget-boilerplate" : "/",
});
