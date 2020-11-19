import fs from "fs"
import template from '../template/base-wc'
import path from "path"
import scope from '../config/environment'

const toUpper = (str, join) => {
  return str
    .toLowerCase()
    .split('-')
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(join);
}

const componentOptionsData = (componentData) => {
  return {
    className: toUpper(componentData.componentName, ''),
    componentName: componentData.componentName ,
    componentUIName: toUpper(componentData.componentName, ' '),
    componentDescription: componentData.componentDescription,
    componentType: componentData.componentType,
    componentCategory: componentData.componentCategory,
    componentScope: componentData.componentScope,
    componentMixins: componentData.componentMixins.join(', '),
  }
}

const getClassName = () => {}

const pathResolve = (componentScope) => {
  return path.resolve() + scope[componentScope]
}

export async function createComponentFile(componentData) {
  const getOptions = await componentOptionsData(componentData);
  fs.writeFile(pathResolve(componentData.componentScope) + componentData.componentName + '/index.js', template({getOptions}), err => {
    if (err) {
      return console.error(`Autsch! Failed to store template: ${err.message}.`);
    }
    console.log('Component created');
  })
}
