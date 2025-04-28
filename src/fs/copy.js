import { join } from 'node:path';
import { cp } from 'node:fs';

const copy = async () => {
    const __dirname = import.meta.dirname;
    const src = join(__dirname, 'files');
    const dest = join(__dirname, 'files_copy');

    cp(src, dest, { errorOnExist: true, force: false, recursive: true }, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await copy();