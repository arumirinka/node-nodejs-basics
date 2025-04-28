import { join } from 'node:path';
import { writeFile } from 'node:fs';

const create = async () => {
    const __dirname = import.meta.dirname;
    writeFile(join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed');
    }); 
};

await create();