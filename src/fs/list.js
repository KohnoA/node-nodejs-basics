import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const pathToDir = path.join(__dirname, 'files');

  fs.readdir(pathToDir, (err, files) => {
    if (err) throw new Error('FS operation failed');

    console.log(files);
  });
};

await list();
