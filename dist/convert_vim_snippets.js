'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (file, out) {

  _fs2.default.readFile(file, 'utf-8', function (err, data) {

    var lines = data.split('\n');

    var snippetJson = {};
    var currentSnippet = void 0;
    lines.forEach(function (line, index) {

      if (line.startsWith('#')) {

        // Do nothing.
      } else if (line.startsWith('snippet')) {

        currentSnippet = line.replace('snippet', '').trim();

        snippetJson[currentSnippet] = {
          "prefix": currentSnippet,
          "body": [],
          "description": currentSnippet
        };
      } else {

        snippetJson[currentSnippet].body.push(line.replace('\t', ''));
      }
    });

    var outFile = out || file + '.vscs';
    _fs2.default.writeFile(outFile, JSON.stringify(snippetJson, undefined, 2), function (error) {
      if (error) console.log(error);
    });
  });
};