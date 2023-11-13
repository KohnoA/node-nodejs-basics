import zlib from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const inputPath = join(__dirname, 'files', 'fileToCompress.txt');
  const outputPath = join(__dirname, 'files', 'archive.gz');

  const gzip = zlib.createGzip();
  const readStream = createReadStream(inputPath);
  const writeStream = createWriteStream(outputPath);

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) throw new Error(`Zip operation failer ${err}`);
  });
};

await compress();
