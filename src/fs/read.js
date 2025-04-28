import { join } from 'node:path';
import { readFile } from 'node:fs';

const read = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');
    
    readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed');

        console.log(data);
    });
};

await read();