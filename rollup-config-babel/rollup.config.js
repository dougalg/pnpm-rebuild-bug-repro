import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
// import commonjs from "@rollup/plugin-commonjs"; // reenable if there are cjs dependencies
import postcss from "rollup-plugin-postcss"; // TODO remove when scss is refactored out

export default [
  {
    input: `${process.cwd()}/src/index.js`,
    // external deps are not bundled by default, these will have to be added
    // declaring packages here supresses errors when importing named exports
    external: [
      /@babel\/runtime/,
      "date-fns",
      "immer",
      "react",
      "react-dom",
      "reselect",
      "prop-types",
      "react-redux",
      "localforage",
      "localforage-setitems",
      "lodash",
      "lodash/fp/compose",
      "lodash/fp/flow",
      "lodash/fp/find",
      "lodash/fp/flattenDeep",
      "lodash/fp/flatten",
      "lodash/fp/get",
      "lodash/fp/identity",
      "lodash/fp/includes",
      "lodash/fp/map",
      "lodash/fp/some",
      "lodash/fp/set",
      "lodash/fp/sortBy",
      "lodash/find",
      "lodash/toArray",
      "lodash/fp/clamp",
    ],
    output: [
      {
        dir: "dist",
        // entryFileNames: "[name].js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        modules: true,
      }),
      babel({
        babelrc: false,
        babelHelpers: "runtime",
        presets: [
          ["@babel/preset-env", { modules: false }],
          "@babel/preset-react",
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-object-rest-spread",
          "@babel/plugin-transform-runtime",
        ],
        exclude: ["node_modules/**"],
      }),
      resolve(),
    ],
  },
];