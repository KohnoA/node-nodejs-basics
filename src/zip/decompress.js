import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const inputPath = join(__dirname, 'files', 'archive.gz');
  const outputPath = join(__dirname, 'files', 'fileToDecompress.txt');

  const gunzip = zlib.createGunzip();
  const readStream = createReadStream(inputPath);
  const writeStream = createWriteStream(outputPath);

  pipeline(readStream, gunzip, writeStream, (err) => {
    if (err) throw new Error(`Zip operation failed ${err}`);
  });
};

await decompress();
