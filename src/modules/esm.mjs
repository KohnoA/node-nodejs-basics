import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import './files/c.js';

const oldRequire = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    // unknownObject = await import('./files/a.json', { assert: { type: 'json' } }); //Experemental
    unknownObject = oldRequire('./files/a.json');
} else {
    // unknownObject = await import('./files/b.json', { assert: { type: 'json' } }); //Experemental
    unknownObject = oldRequire('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

// console.log(unknownObject.default); //Experemental
console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
