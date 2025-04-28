import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const calculateHash = async () => {
    const file = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const readStream = createReadStream(file);
    readStream.on('readable', () => {
        const data = readStream.read();
        if (data)
          hash.update(data);
        else {
          console.log(hash.digest('hex'));
        }
    });
};

await calculateHash();