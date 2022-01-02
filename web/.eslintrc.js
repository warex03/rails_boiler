module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: __dirname + '/tsconfig.json',
  },
  plugins: ['jest', 'prettier', '@typescript-eslint'],
  rules: {
    // react prop types is redundant with typescript
    'react/prop-types': 0,
    'no-console': 2,
    'no-alert': 0,
    'no-continue': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/display-name': 0,
    // It's ok for getinitialprops to be unbound
    '@typescript-eslint/unbound-method': 0,
    // makes no sense to allow type inference for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    // we disable this because we disabled semicolon delimiters in prettier which conflicts with this rule
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
      },
    ],
    // We have custom labels without input (e.g. for stripe)
    'jsx-a11y/label-has-associated-control': 0,
    // React <Link> components require the <a> tag to not have href
    'jsx-a11y/anchor-is-valid': 0,
    // we're not gonna be hiring blind operators, probably.
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    // we violate this a lot of times, it seems pretty useless
    '@typescript-eslint/require-await': 0,
    // this is standard practice for @reduxjs/toolkit
    'no-param-reassign': 0,
    // we use this pretty often, and hopefully pretty responsibly
    '@typescript-eslint/no-non-null-assertion': 0,
    // this recommends e.g. utils/foo.ts to be default export, which makes it a PITA when
    // you in the future want to export more than 1 thing
    'import/prefer-default-export': 0,
    // it's too easy to accidentally forget to await an async call
    '@typescript-eslint/no-floating-promises': 2,
    // lots of false positives when doing non-null assertions in GQL
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    // new @typescript-eslint rules that will require several hundred LoC changes, that
    // we should probably do, _eventually_
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/comma-dangle': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/naming-convention': 0,
    'react/destructuring-assignment': 0,
    // our fixtures are in directories named __mocks__ so this doesn't work well
    'jest/no-mocks-import': 0,
    // no-ops are pretty common
    '@typescript-eslint/no-empty-function': 0,
    // conflicts with some prettier rules
    '@typescript-eslint/no-extra-semi': 0,
  },
  ignorePatterns: ['src/graphql/types.ts'],
}
