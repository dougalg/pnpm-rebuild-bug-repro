module.exports = {
   root: true,
   env: {
     browser: true,
     es6: true,
     jest: true,
   },
   globals: {
     Atomics: "readonly",
     SharedArrayBuffer: "readonly",
   },
   parser: "@babel/eslint-parser",
   parserOptions: {
     ecmaFeatures: {
       jsx: true,
     },
     ecmaVersion: 2018,
     sourceType: "module",
   },
   extends: [
     "eslint:recommended",
     "plugin:react/recommended",
     "plugin:react-hooks/recommended",
     "prettier",
   ],
   plugins: ["react", "react-hooks", "jest"],
   overrides: [
     {
       files: ["**/*.test.js"],
       plugins: ["jest"],
       extends: ["plugin:jest/recommended"],
     },
   ],
   settings: {
     react: {
       version: "detect",
     },
   },
   rules: {
     // Bracket notation when accessing styles is much more readable than dot notation,
     // as the string matches the BEM classname in scss, while dot notation is converted to camelCase
     // "dot-notation": 0,
 
     // Facebook no longer recommends .jsx
     // https://github.com/facebook/create-react-app/releases/tag/v0.4.1
     // https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
     // "react/jsx-filename-extension": [1, { extensions: [".js"] }],
 
     // Allows importing of monorepos, otherwise this will
     // always throw an error: import { storiesOf } from "@storybook/react"
     // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     // "import/no-extraneous-dependencies": ["error", { packageDir: ["./"] }],
 
     // Named exports are preferred anyway
     // "import/prefer-default-export": "off",
 
     // enable hooks rules
     // "react-hooks/rules-of-hooks": "error",
     // "react-hooks/exhaustive-deps": "warn",
 
     // Allows input to have an associated label without nesting
     // "jsx-a11y/label-has-for": [2, { required: { every: ["id"] } }],
 
     // Skip checking for prop-types if jsdoc is being used instead
     "react/prop-types": [
       1,
       {
         skipUndeclared: true,
       },
     ],
   },
 };