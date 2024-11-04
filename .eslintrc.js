module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser', // Use vue-eslint-parser to handle Vue files
  parserOptions: {
    parser: '@babel/eslint-parser', // Use Babel parser for JavaScript
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false, // Only if you don’t have a .babelrc file
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@babel/recommended', // Enable Babel-specific linting rules
  ],
  rules: {
    'no-unused-vars': 'warn', // Adjust rules based on your project needs
  },
};
