export async function version() {
  const packagejson = require('../config')
  console.log(packagejson.editor);
}
