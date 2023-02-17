module.exports = {
  'env': {
    'es2021': true
    , 'browser': true
    // , 'node': true
  }
  , 'extends': [
    'eslint:recommended'
    , 'plugin:vue/vue3-essential'
    , 'plugin:@typescript-eslint/recommended'
  ]
  , 'overrides': []
  , 'parser': 'vue-eslint-parser'
  , 'parserOptions': {
    'ecmaVersion': 'latest'
    , 'parser': '@typescript-eslint/parser'
    , 'sourceType': 'module'
  }
  , 'plugins': [
    'vue'
    , '@typescript-eslint'
  ]
  , 'rules': {
    'comma-style': [
      'error'
      , 'first'
    ]
    , 'comma-spacing': [
      'error'
      , {
        "before": false
        , "after": true
      }
    ]
    , 'indent': [
      'error'
      , 2
    ]
    , 'linebreak-style': [
      'error'
      , 'unix'
    ]
    , 'quotes': [
      'error'
      , 'single'
    ]
    , 'semi': [
      'error'
      , 'never'
    ]
    , 'vue/html-quotes': ['error', 'single', { 'avoidEscape': false }]
  }
  , 'ignorePatterns': ['*.d.ts']
}
