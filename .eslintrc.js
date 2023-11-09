module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': [
    'airbnb',
    'airbnb-typescript',
    'plugin:i18next/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'plugins': [
    'react',
    'i18next'
  ],
  'rules': {
    // 0 = off, 1 = warn, 2 = error
    '@typescript-eslint/object-curly-spacing': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/comma-dangle': 0,

    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/order': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'padded-blocks': 0,
    'jsx-quotes': 1,
    'eol-last': 0,

    'i18next/no-literal-string': 0,// ['error', {markupOnly: true}],
    'max-len': ['error', {ignoreComments: true, code: 100}],

    // other
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'object-curly-spacing': 0,
    'comma-dangle': 0,
    'quote-props': 0,
    'quotes': 0,

    'react/jsx-filename-extension': [2, {extensions: ['.js', 'jsx', 'tsx']}],
    'no-unused-vars': 1

  },
  'globals': {
    '__IS_DEV__': true
  }
};
