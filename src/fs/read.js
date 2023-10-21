import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    fs.readFile(pathToFile, 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed');

        console.log(data);
    });
};

await read();