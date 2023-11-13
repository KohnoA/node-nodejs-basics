import { Transform, pipeline } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const chunkStringified = chunk.toString().trim();
      const reversedData = chunkStringified.split('').reverse().join('');

      this.push(reversedData + '\n');

      // callback(null, reversedData + '\n');
      callback();
    }
  });

  pipeline(
    stdin,
    transformStream,
    stdout,
    (err) => {
      if (err) throw new Error(`Streams operation failed: ${err}`);
    }
  )
};


await transform();
