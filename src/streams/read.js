import { join } from 'node:path';
import { createReadStream } from 'node:fs';

const read = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');

    const readStream = createReadStream(filePath, 'utf-8');
    readStream.on('data', (chunk) => process.stdout.write(chunk + '\n'));
};

await read();