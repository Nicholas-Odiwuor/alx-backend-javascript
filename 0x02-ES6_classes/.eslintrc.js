module.exports = {
  env: {
    es2020: true,       # Use ES2020 (latest Node 12 supports)
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2020   # Match Node 12's JS support
  }
};

