import { join } from 'node:path';
import { rm } from 'node:fs';

const remove = async () => {
    const fileToRemove = join(import.meta.dirname, 'files', 'fileToRemove.txt');
    rm(fileToRemove, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await remove();