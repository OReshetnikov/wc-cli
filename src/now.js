import path from 'path';
import fs from 'fs';

export async function now() {
  const directoryPath = process.cwd();
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
      console.log(file);
    });
  });
}
