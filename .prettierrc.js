module.exports = {
    bracketSpacing: false,
    jsxBracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    semi: true,
    tabWidth: 4,
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.ts'],
            options: {
                parser: 'babel-ts',
            },
        },
    ],
};
