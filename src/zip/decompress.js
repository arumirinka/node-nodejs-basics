import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    const fileToUnzip = join(import.meta.dirname, 'files', 'archive.gz');
    const resFile = join(import.meta.dirname, 'files', 'fileToCompress.txt');
    const unZip = createUnzip();
    const src = createReadStream(fileToUnzip);
    const dest = createWriteStream(resFile);

    pipeline(src, unZip, dest, (err) => {if (err) console.log(err)});
};

await decompress();