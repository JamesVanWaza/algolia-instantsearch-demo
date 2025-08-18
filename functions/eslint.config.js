import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import jsdoc from "eslint-plugin-jsdoc";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export const config = defineConfig([{
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
