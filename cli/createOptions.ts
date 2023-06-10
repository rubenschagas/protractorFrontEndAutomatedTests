import yargs from 'yargs';

export interface CliOptions {
    script: string;
    site: string;
    output: 'full' | 'plain';
}

export function createOptions(): CliOptions {
    return yargs
        .usage(
            'Usage: ts-node e2e_cli.ts [--script allfeatures]'
        )
        .env('PROTRACTORE2E')
        .option('script', {
            describe: 'NPM script to be executed. E.G.: allfeatures|wm-update|protractor',
            type: 'string',
            default: 'allfeatures',
            demandOption: false,
        })
        .option('site', {
            alias: 's',
            describe: 'A site to be opened. E.G.: https://roadmap.sh/',
            type: 'string',
            default: 'https://roadmap.sh/',
            demandOption: false,
        })
        .option('output', {
            describe: 'Console output type.',
            choices: ['full', 'plain'],
            default: 'full' as CliOptions['output'],
            demandOption: false,
        }).argv;
}
