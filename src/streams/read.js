import { stdout } from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(pathToFile, { encoding: 'utf-8' });

  readStream.on('data', (chunk) => stdout.write(chunk));

  readStream.on('error', (err) => {
    throw new Error('Streams operation failed', err);
  });
};

await read();
