const { resolve } = require('path')

module.exports = {
  // 导入别名
  // 这些条目可以是精确的请求->请求映射*（精确，无通配符语法）
  // 也可以是请求路径-> fs目录映射。 *使用目录映射时
  // 键**必须以斜杠开头和结尾**
  alias: {
    // ‘react‘: ‘@pika/react‘,
    // ‘react-dom‘: ‘@pika/react-dom‘
    // ‘/@foo/‘: path.resolve(__dirname, ‘some-special-dir‘),
    "/@/": resolve(__dirname, "src"),
  },
  hostname: "127.0.0.1",
  port: 8888,
  open: true,
  https: false,
  ssr: false,
  base: "./",
  outDir: "dist",
  // 配置Dep优化行为
  optimizeDeps: {
    // exclude: [‘dep-a‘, ‘dep-b‘],
  },
  // 转换Vue自定义块的功能。
  vueCustomBlockTransforms: {
    // i18n: src => `export default Comp => { ... }`,
  },
  // 为开发服务器配置自定义代理规则。
  proxy: {
    // proxy: {
    //   ‘/foo‘: ‘http://localhost:4567/foo‘,
    //   ‘/api‘: {
    //     target: ‘http://jsonplaceholder.typicode.com‘,
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, ‘‘),
    //   },
    // },
  },
  // css: {
  //       loaderOptions: {
  //           // 给 sass-loader 传递选项
  //           sass: {
  //               // @/ 是 src/ 的别名
  //               // 所以这里假设你有 `src/variables.scss` 这个文件
  //               data: `@import "@/assets/css/optionalStyle/${process.env.CSS_STYLE}/${process.env.CSS_STYLE}.scss";`
  //           }
  //       }
  //   },
  // ...
};
