const fs = require('fs');
const path = require('path');

export async function file() {
  getCurrentDirectoryBase: () => path.basename(process.cwd());
  directoryExists: (filePath) => fs.existsSync(filePath);
};
