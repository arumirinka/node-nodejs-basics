const parseEnv = () => {
    const vars = process.env;
    const RSSVars = [];
    Object.keys(vars).forEach((key) => {
        if (key.startsWith("RSS_")) {
            RSSVars.push(`${key}=${vars[key]}`);
        }
    })
    console.log(RSSVars.join('; '));
};

parseEnv();