import cli from 'commander';
import projectProperties from '../package.json';
import convertVimSnippets from './convert_vim_snippets';

cli
  .version(projectProperties.version)
  .option('-f --file <file>', 'Input file.')
  .option('-o --out <out>', 'Output file.')
  .parse(process.argv);

if (!(cli.file)){

  cli.help();
} else {

  convertVimSnippets(cli.file, cli.out);
}