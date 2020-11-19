import fs from "fs"
import path from "path"
import scope from '../config/environment'

const pathResolve = (componentScope) => {
  return path.resolve() + scope[componentScope]
}

export async function createComponentFolder(componentName, componentScope) {
  if (!fs.existsSync(pathResolve(componentScope) + componentName)){
    fs.mkdirSync(pathResolve(componentScope) + componentName);
  }
}
