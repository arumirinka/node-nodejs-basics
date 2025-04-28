import { join } from 'node:path';
import { access, constants, rename as renameFs } from 'node:fs';

const rename = async () => {
    const __dirname = import.meta.dirname;
    const wrongPath = join(__dirname, 'files', 'wrongFilename.txt');
    const properPath = join(__dirname, 'files', 'properFilename.md');

    access(properPath, constants.F_OK, (err) => {
        if (err) {
            renameFs(wrongPath, properPath, (err) => {
                if (err) throw new Error('FS operation failed');
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await rename();