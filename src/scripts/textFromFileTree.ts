type fileOrFolder = {
  name:string,
  files?:fileOrFolder[],
  clickEvent?:any,
  path?:string
}

async function getFile(filePath: string) {
  try {
    return await Deno.readTextFile(filePath);
  } catch(e) {
      if (e instanceof Error) {
        console.log(filePath + ': ' + e.message);
      } else {
        console.log(filePath + ': ' + String(e));
      }
    }
  }
  
  async function writeFile(filePath: string,content: string) {
    try {
    await Deno.writeTextFile(filePath, content);
    console.log("File written to "+filePath);
  } catch(e) {
      if (e instanceof Error) {
        console.log(filePath + ': ' + e.message);
      } else {
        console.log(filePath + ': ' + String(e));
      }
  }
}

// Helper to convert gitignore patterns to regex
function gitignoreToRegex(pattern: string): RegExp {
  const isNegation = pattern.startsWith('!');
  if (isNegation) {
    pattern = pattern.slice(1);
  }

  const regexPattern = pattern
    .replace(/([.+?^${}()|[\]\\])/g, '\\$1') // Escape all special regex chars
    .replace(/\*\*/g, '.*') // Handle '**' for any path segment
    .replace(/\*/g, '[^/]*'); // Handle '*' for any character except '/'

  let finalPattern = regexPattern;
  // Patterns ending with '/' should match directories.
  // We'll match the end of the string or a slash.
  if (pattern.endsWith('/')) {
    finalPattern = finalPattern.slice(0, -1) + '(/|$)';
  }

  if (pattern.includes('/')) {
    // If it contains a slash, it's relative to the root
    finalPattern = `^${finalPattern}`;
  } else {
    // Otherwise, it can be anywhere
    finalPattern = `(^|/)${finalPattern}`;
  }

  return new RegExp(finalPattern);
}

// Helper to check if a path should be ignored
function isIgnored(relPath: string, ignorePatterns: {regex: RegExp, isNegation: boolean}[]): boolean {
  // Ignore .git directory and files/directories starting with a dot.
  if (relPath === '.git' || relPath.startsWith('.git/') || relPath.split('/').some(part => part.startsWith('.') && part !== '.')) {
    return true;
  }

  let ignored = false;
  for (const pattern of ignorePatterns) {
    if (pattern.regex.test(relPath)) {
      ignored = !pattern.isNegation;
    }
  }
  return ignored;
}

// Helper to read and parse .gitignore
function parseGitignore(basePath: string): string[] {
  const gitignorePath = `${basePath}/.gitignore`;
  try {
    const content = Deno.readTextFileSync(gitignorePath);
    return content.split('\n').filter(line => line.trim() !== '' && !line.startsWith('#'));
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      return [];
    }
    throw e;
  }
}

const inputPath = parseArgs();

// Check if path exists and is a directory
try {
  const stat = await Deno.stat(inputPath);
  if (!stat.isDirectory) {
    console.error(`Error: Provided path '${inputPath}' is not a directory.`);
    Deno.exit(1);
  }
} catch (e) {
  if (e instanceof Error) {
    console.error(`Error: Provided path '${inputPath}' does not exist. (${e.message})`);
  } else {
    console.error(`Error: Provided path '${inputPath}' does not exist. (${String(e)})`);
  }
  Deno.exit(1);
}

const ignorePatterns = parseGitignore(inputPath).map(pattern => ({
    regex: gitignoreToRegex(pattern),
    isNegation: pattern.startsWith('!')
}));

async function loopTree(path:string, relPath = ""){
  const array:fileOrFolder[] = []
  for await (const dirEntry of Deno.readDir(path)) {
    const entryRelPath = (relPath ? relPath + "/" : "") + dirEntry.name;
    if (isIgnored(entryRelPath, ignorePatterns)) continue;
    if(dirEntry.isDirectory){
      array.push({
        name:dirEntry.name,
        files: await loopTree(path + "/" + dirEntry.name, entryRelPath)
      })
    }else if(dirEntry.isFile){
      array.push({
        name: dirEntry.name,
        path: entryRelPath
      })
    }
  }
  return array
}

// Parse command line arguments for path
function parseArgs() {
  const args = Deno.args;
  let path = ".";
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "-p" || args[i] === "--path") {
      if (i + 1 < args.length) {
        path = args[i + 1];
      } else {
        console.error("Error: No path specified after " + args[i]);
        Deno.exit(1);
      }
    }
  }
  return path;
}

const t = await loopTree(inputPath)
await writeFile("./textFromFileTreeOutput.json",JSON.stringify(t))

//This will scan and write to textFromFileTreeOutput.json
//deno run --allow-read --allow-write .\textFromFileTree.ts

export {}