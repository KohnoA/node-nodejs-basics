import crypto from 'node:crypto';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = crypto.createHash('sha256');

  try {
    const data = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
  
    hash.update(data);
  
    console.log(hash.digest('hex'));
  } catch (err) {
    throw new Error('Hash operation failed');
  }

};

await calculateHash();