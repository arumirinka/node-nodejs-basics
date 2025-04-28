import { join } from 'node:path';
import { readdir } from 'node:fs';

const list = async () => {
    const dirPath = join(import.meta.dirname, 'files');

    readdir(dirPath, (err, files) => {
        if (err) throw new Error('FS operation failed');

        console.log(files);
    });
};

await list();