const parseArgs = () => {
    const args = process.argv;
    const argsArr = [];
    args.forEach((arg, i) => {
        if (arg.startsWith('--')) {
            argsArr.push(`${arg.slice(2)} is ${args[i+1]}`);
        }
    });
    console.log(argsArr.join(', '));
};

parseArgs();