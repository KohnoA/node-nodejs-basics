import { fork } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const pathToFile = join(__dirname, 'files', 'script.js');

  fork(pathToFile, args);
};

spawnChildProcess(['one', 'two', 'three']);
