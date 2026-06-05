import  fs  from 'fs/promises';

async function writeToFile(filename: string, data: string): Promise<string> {
    await fs.appendFile(filename, data);
    return `Data written to ${filename}`;
}

// writeToFile('output.txt', 'Hello, TypeScript!').catch(err => console.error(err));

async function readFromFile(filename: string): Promise<string> {
    const content = await fs.readFile(filename, 'utf-8');
    return content;
}

readFromFile('output.txt').catch(err => console.error(err)).then(content => console.log(content));  