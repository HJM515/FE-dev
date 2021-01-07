module.exports = {
  eslintIntegration: true,
  useTabs: false, // [使用 tab 缩进，默认 fasle]
  semi: false, // [使用分号, 默认 true]
  singleQuote: true, // [使用单引号, 默认 false]
  tabWidth: 2 // .prettierrc的设置优先级最高, 可覆盖settings.json设置
  "printWidth": 120,
  "trailingComma": "es5", // [尾逗号，默认]
  "bracketSpacing": false, // [对象中首尾空格 默认true]
  "arrowParens": "always", // [箭头函数参数括号，默认 avoid]
  "quoteProps": "consistent", // [对象字面量属性名称使用引号, 默认 always，consistent 使用一致的引号，要么全部用引号，要么都不用]
}
