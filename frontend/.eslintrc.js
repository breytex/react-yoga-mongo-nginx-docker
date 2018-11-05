module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "modules": true
    },
    "sourceType": "module"
  },

  "plugins": [
    "react", "prettier"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },

  "extends": [
    "airbnb-base", "eslint:recommended", "plugin:react/recommended", "prettier", "prettier/react"
  ],

  "rules": {
    "semi": [
      2, "never"
    ],
    "react/jsx-no-bind": [
      "error", {
        "allowArrowFunctions": true,
        "allowBind": false,
        "ignoreRefs": true
      }
    ],
    "react/no-did-update-set-state": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "prettier/prettier": [
      "error", {
        "semi": false,
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120
      }
    ]
  }
}
