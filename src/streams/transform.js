import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const revert = new Transform({
        transform(chunk, encoding, callback) {
            const reverted = chunk.toString().split('').reverse().join('');
            callback(null, `${reverted} \n`);
        },
    });
    pipeline(process.stdin, revert, process.stdout, (err) => console.error(err));
};

await transform();