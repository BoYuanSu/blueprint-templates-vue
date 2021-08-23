module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/max-attributes-per-line': [1, {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    quotes: ['warn', 'single'],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    indent: ['warn', 2],
    'comma-spacing': ['warn'],
    'comma-dangle': ['warn', 'never'],
    'key-spacing': ['warn', { beforeColon: false }],
    'keyword-spacing': ['warn'],
    'space-in-parens': ['warn'],
    'space-before-function-paren': ['warn', 'always'],
    'space-before-blocks': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'no-multi-spaces': 'warn',
    'arrow-spacing': 'warn',
    'space-infix-ops': 'warn',
    'vue/html-closing-bracket-spacing': ['warn'],
    'vue/html-indent': ['warn', 2],
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/no-multi-spaces': ['warn', {
      ignoreProperties: false
    }],
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
