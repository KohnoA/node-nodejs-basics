import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(pathToFile, { encoding: 'utf-8' });

    // stdin.on('data', (chunk) => writeStream.write(chunk));
    stdin.pipe(writeStream); // Синхронизация между потом чтения и записи
    stdin.on('error', (err) => {
        throw new Error('Streams operation failed', err);
    });
};

await write();