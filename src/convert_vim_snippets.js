import fs from 'fs';

export default (file) => {

  fs.readFile(file, 'utf-8', (err, data) => {

    console.log('data: ', data);
  });
};