

export function createGrid(size){
  return Object.fromEntries(
    [...Array(size * size).keys()].map((key) => {
      return [key.toString(), "#000000"];
    })
  );
}