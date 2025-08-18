const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.node,
        },

        "ecmaVersion": 2018,
        parserOptions: {},
    },

    extends: compat.extends("eslint:recommended", "google"),

    rules: {
        "no-restricted-globals": ["error", "name", "length"],
        "prefer-arrow-callback": "error",

        "quotes": ["error", "double", {
            "allowTemplateLiterals": true,
        }],
    },
}, {
    files: ["**/*.spec.*"],

    languageOptions: {
        globals: {
            ...globals.mocha,
        },
    },

    rules: {},
}]);

// Setting up JSDOC
import jsdoc from "eslint-plugin-jsdoc";

export default [
    {
        files: ["**/*.js"],
        plugins: {
            jsdoc: jsdoc,
        },
        rules: {
            "jsdoc/require-description": "error",
            "jsdoc/check-values": "error",
        },
    },
];
