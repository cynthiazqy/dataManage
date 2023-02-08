module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 解析 .vue 文件
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/essential', // 同于'plugin:vue/recommeded'
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:vue/recommended', // eslint-plugin-vue 插件是用来检测和规范 Vue 代码的风格
    'plugin:@typescript-eslint/recommended', // eslint-plugin-vue 插件是用来检测和规范 Vue 代码的风格
    '@vue/typescript'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow'
      }
    ],
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
    ],
    'vue/multi-word-component-names': [
      'off', // 'error'
      {
        ignores: []
      }
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'vue/attributes-order': 0,
    'vue/html-self-closing': 0
  }
};
