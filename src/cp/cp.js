import { join } from 'node:path';
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const file = join(import.meta.dirname, 'files', 'script.js');
    const childProcess = spawn('node', [file, ...args], {stdio: [process.stdin, process.stdout, 'pipe'] });

    childProcess.on('error', (error) => {
        console.error(`Error: ${error}`);
    });

    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
