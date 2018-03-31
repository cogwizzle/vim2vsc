# vim2vsc
Converts Vim snippets to Visual Studio code snippets.

## Why I built this CLI tool
I created this project because I wanted to try out Visual Studio Code but quickly found that I lost all of my snippets and there was no easy way to recover them.  I decided to give a command line conversion application a go and this is what I came up with for converting my old snippets.

## Install
To install vim2vsc you just need to run a simple npm install global command.
```
npm i -g vim2vsc
```

## Basic Usage
To run convert a snippets file you just need to specify the file that you want to process.

Example:
```
vim2vsc -f ./my_custom_snips.snippet
```

This command will create a the file _./my_custom_snips.snippet.vscs_ by default.

### Specify output
If you do not like the default naming convention you can specify the output file name.

Example
```
vim2vsc -f ./my_custom_snips.snippet -o ./snips.vscs
```

This command will create the file _./snips.vscs_

## Support
Please [open an issue](https://github.com/jfehrman/vim2vsc/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/fraction/readme-boilerplate/compare/).
