module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "script" // Required for Node.js 12
  },
  rules: {
    // Add rules here if needed
  }
};
