import { join } from 'node:path';
import { createWriteStream } from 'node:fs';

const write = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();