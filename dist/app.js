'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _convert_vim_snippets = require('./convert_vim_snippets');

var _convert_vim_snippets2 = _interopRequireDefault(_convert_vim_snippets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).option('-f', '--file <file>').action(function (file) {
  (0, _convert_vim_snippets2.default)(file);
}).parse(process.argv);