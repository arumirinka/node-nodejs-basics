import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const fileToCompress = join(import.meta.dirname, 'files', 'fileToCompress.txt');
    const resFile = join(import.meta.dirname, 'files', 'archive.gz');
    const gZip = createGzip();
    const src = createReadStream(fileToCompress);
    const dest = createWriteStream(resFile);

    pipeline(src, gZip, dest, (err) => {if (err) console.log(err)});
};

await compress();