module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb/base', 'plugin:react/recommended', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        // indent: ['error', 4],
        // 'react/jsx-indent': ['error', 4],
        // 'react/jsx-indent-props': ['error', 4],
        'react/react-in-jsx-scope': [0],
        'react/prop-types': [0],
        'react/no-array-index-key': [0],
        'react/forbid-prop-types': [0],
        'react/no-danger': [0],
        'react/require-default-props': [0],
        'no-shadow': [0],
        // [Deprecated], https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md

        'react/jsx-props-no-spreading': [0],
        'react/jsx-fragments': ['error', 'element'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'max-len': [
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'prettier/prettier': 1,
        'prefer-destructuring': [
            'warn',
            {
                array: true,
                object: true,
            },
        ],
    },
};
