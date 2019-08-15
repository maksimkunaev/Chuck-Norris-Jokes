module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            modules: true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": [2, "never"],
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react/jsx-uses-react": 1,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
};
