/**
 * @type {import('eslint').ESLint}
 */
module.exports = {
    root: true,
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "airbnb",
        "airbnb-typescript",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: false,
        },
    },
    plugins: ["import", "@typescript-eslint", "jest"],
    rules: {
        "no-console": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "prettier/prettier": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            env: {
                jest: true,
            },
            files: ["**/__tests__/**/*.[jt]s", "**/?(*.)+(spec|test).[jt]s"],
            extends: ["plugin:jest/recommended"],
            rules: {
                "import/no-extraneous-dependencies": [
                    "off",
                    { devDependencies: ["**/?(*.)+(spec|test).[jt]s"] },
                ],
            },
        },
    ],
    env: {
        browser: true,
        node: true,
    },
    ignorePatterns: ["**/*.js", "**/*.json", "node_modules", ".next", "public"],
}
