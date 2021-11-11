module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react'],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            tsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'enumMember',
                format: ['UPPER_CASE'],
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'typeParameter',
                format: ['PascalCase'],
                prefix: ['T'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I'],
            },
        ],
        'react/jsx-uses-react': 1,
        'no-undef': 'off',
        'react/jsx-uses-vars': 1,
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
            'warn',
            {ignoreFunctionTypeParameterNameValueShadow: true},
        ],
        '@typescript-eslint/typedef': [
            'error',
            {
                arrowParameter: false,
                parameter: true,
                propertyDeclaration: true,
                arrayDestructuring: false,
                variableDeclarationIgnoreFunction: true,
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'import/no-webpack-loader-syntax': 'off',
    },
};
