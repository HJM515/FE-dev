module.exports = {
  root: true, // 限定在该项目下使用该配置文件【eslint默认会在所有父级目录中寻找配置文件】
  env: { // 指定启用环境
    node: true, // node.js全局变量和作用域
    es6: true, // 启用出modules以外的所有ES6特性
    browser: true // 浏览器环境中的全局变量
  },
  extends: ['plugin:vue/essential', '@vue/prettier'], // 一个配置文件可以被基础配置中的已启用的规则继承，每个配置继承它前面的配置
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint' // 解析器 对bubel解析器的包装，使其能够与elslint兼容
  }
}
