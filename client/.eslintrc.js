module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/typescript",
    "airbnb",
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/quotes": [
      "warn",
      "double",
      { allowTemplateLiterals: true },
    ],
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-unused-vars": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
