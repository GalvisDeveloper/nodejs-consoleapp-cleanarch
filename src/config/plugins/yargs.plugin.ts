

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Multiplication table base',
        type: 'number',
    })
    .option('l', {
        alias: 'limit',
        describe: 'Declare a limit for the multiplication table',
        type: 'number',
        default: 10,
    })
    .option('s', {
        alias: 'show',
        describe: 'Show multiplication base',
        type: 'boolean',
        default: false,
    })
    .option('n', {
        alias: 'name',
        describe: 'Name of the file to be saved',
        type: 'string',
        default: 'table',
    })
    .option('p', {
        alias: 'path',
        describe: 'Location where the file will be saved',
        type: 'string',
        default: 'outputs/',
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw new Error('Error: The base must be a number');
        } else if (argv.b < 1) {
            throw new Error('Error: The base must be greater than 0');
        }
        return true;
    })
    .parseSync();
