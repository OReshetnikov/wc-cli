import fs from "fs"
import path from "path"

export async function getMixins() {
  const content = fs.readFileSync(path.resolve() + '/shared/src/fusion/mixins/index.js').toString();
  const regexp = /export\s*{(.*?)}/gs
  const selected = regexp.exec(content);
  const  getMixins = selected[1].trim().split(', ');
  const a = getMixins.reduce((acc,elem) => {
    acc.push({'name': elem})
    return acc
  }, [])
  console.log(a)
}
