
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
      console.log(filePath+': '+e.message);
    }
  }
  
  async function writeFile(filePath: string,content: string) {
    try {
    await Deno.writeTextFile(filePath, content);
    console.log("File written to "+filePath);
  } catch(e) {
      console.log(filePath+': '+e.message);
  }
}


const tree:string[] = []
async function loop(path:string){
  for await (const dirEntry of Deno.readDir(path)) {
    if(dirEntry.isDirectory){
      dirEntry.name + "/" + await loop(path+dirEntry.name+"/")
    }else if(dirEntry.isFile){
      tree.push(path+dirEntry.name)
    }
  }
} 
function openPath(p:string){
  return p
}
const finalTree = []
const rootPath = "/"
async function loopTree(path:string){
  const array:fileOrFolder[] = []
  for await (const dirEntry of Deno.readDir(path)) {
    if(dirEntry.isDirectory){
      array.push({
        name:dirEntry.name,
        files: await loopTree(path+dirEntry.name+"/")
      })
      // dirEntry.name + "/" + await loop(path+dirEntry.name+"/")
    }else if(dirEntry.isFile){
      array.push({
        name: dirEntry.name,
        path:`${path.replace(rootPath,"")+dirEntry.name}`
      })
      
    }
  }
  return array
}
const t = await loopTree(rootPath)
await writeFile("./textFromFileTreeOutput.json",JSON.stringify(t))



// console.log(tree.map(path=>path.replace(rootPath,"./../../")))

//This will scan and write to textFromFileTreeOutput.json
//deno run --allow-read --allow-write .\textFromFileTree.ts