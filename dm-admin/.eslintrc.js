module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'prettier/prettier': 'off',
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
