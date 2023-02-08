module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser', // 解析 .vue 文件
  extends: [
    'plugin:vue/essential', // 同于'plugin:vue/recommeded'
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:vue/recommended', // eslint-plugin-vue 插件是用来检测和规范 Vue 代码的风格
    'plugin:@typescript-eslint/recommended' // eslint-plugin-vue 插件是用来检测和规范 Vue 代码的风格
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser' // 解析 .ts 文件
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-reserved-keys': [
      0,
      {
        reserved: [],
        groups: []
      }
    ],
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ]
  }
};
