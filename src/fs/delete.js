import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

  fs.unlink(pathToFile, (err) => {
    if (err) throw new Error('FS Operation failed');
  });
};

await remove();
