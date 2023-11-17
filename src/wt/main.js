import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const pathToFile = join(__dirname, 'worker.js');
  const coresArray = os.cpus();
  const STARTING_VALUE = 10;

  const promisifiedWorkersArray = coresArray.map((_, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(pathToFile, {
        workerData: STARTING_VALUE + index,
      });
      
      worker.on('message', data => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    })
  });

  console.log(await Promise.all(promisifiedWorkersArray));
};

await performCalculations();
