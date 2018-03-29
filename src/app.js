import cli from 'commander';
import projectProperties from '../package.json';
import convertVimSnippets from './convert_vim_snippets';

cli
  .version(projectProperties.version)
  .option('-f', '--file <file>')
  .action(file => {
    convertVimSnippets(file);
  })
  .parse(process.argv);