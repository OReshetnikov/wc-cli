import {createComponentFolder} from '../lib/createComponentFolder'
import {createComponentFile} from '../lib/createComponentFile'
import {getMixins} from '../config/getMixins'
import {createDialogue} from './createDialogue'
import prompts from '../config/dialogues'
import {EventEmitter} from "events"

export async function createNewComponent() {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() * 5));
  console.log(prompts)
  console.log('*********************')
  const componentName = await createDialogue(prompts.componentName);
  const componentCategory = await createDialogue(prompts.componentCategory);
  const componentType = await createDialogue(prompts.componentType);
  const componentDescription = await createDialogue(prompts.componentDescription);
  const componentScope = await createDialogue(prompts.componentScope);
  const chooseMixins = await createDialogue(prompts.chooseMixins);
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() * 5));
  await getMixins()
  let componentMixins = ['SlideComponent']
  if (chooseMixins === 'yes') {
    componentMixins = [
      ...componentMixins,
      ...await createDialogue(prompts.componentMixins)
    ];
    console.log(componentMixins)
  }
  // const componentData = { componentName, componentCategory, componentType, componentDescription, componentScope, componentMixins }
  // await createComponentFolder(componentName, componentScope);
  // await createComponentFile(componentData);
}
