import fs from 'fs';
import { log } from 'util';

export default async (file, out) => {

  fs.readFile(file, 'utf-8', (err, data) => {

    const lines = data.split('\n');

    let snippetJson = {};
    let currentSnippet;
    lines.forEach((line, index) => {

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

    const out = `${file}.vs`;
    fs.writeFile(out, JSON.stringify(snippetJson, undefined, 2));
  });
};