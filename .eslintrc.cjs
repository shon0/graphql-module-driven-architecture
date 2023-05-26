/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  env: { node: true },
  rules: {},
  overrides: [
    {
      files: ['src/schema/**/*.graphql'],
      extends: ['plugin:@graphql-eslint/schema-recommended'],
      parserOptions: {
        schema: 'src/schema/**/*.graphql',
      },
      rules: {
        '@graphql-eslint/require-description': 'off',
        '@graphql-eslint/strict-id-in-types': 'off',
        '@graphql-eslint/input-name': 'error',
      },
    },
  ],
  ignorePatterns: ['src/schema.graphql'],
}
