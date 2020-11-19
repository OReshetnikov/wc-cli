import clear from 'clear';
import { createNewComponent } from '../dialogues/createNewComponent'
import prompts from '../config/dialogues'
import {createDialogue} from '../dialogues/createDialogue'

export async function create() {
  clear();
  const chosenAction = await createDialogue(prompts.creationComponent)
  if (chosenAction === 'new') {
    await createNewComponent()
  }
  if (chosenAction === 'extend') {
    console.log('create ext');
  }
}
