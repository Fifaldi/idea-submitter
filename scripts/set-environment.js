#!/bin/node
const fs = require('fs');
const _ = require('lodash');
//Obtain the environment string passed to the node script
const environment = process.argv[2];
//read the content of the json file
const envFileContent = require(`../src/environment/${environment}.env.json`);
const getValue = (value) => {
    return typeof value === 'string' ? `'${value}'` : `${value}`;
};
//copy the json inside the env.json file
fs.writeFileSync(
    'src/environment/env.ts',
    `export const environment = {${_.entries(envFileContent)
        .map((item) => `${item[0]}: ${getValue(item[1])}`)
        .join(', ')}};`,
);
