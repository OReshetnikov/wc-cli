import {getMixins} from './getMixins'

const prompts = {
  creationComponent: {
    type: 'list',
    name: 'creationComponent',
    message: 'Please, select if this is a new base web-component or extended from another one',
    choices: [
      {
        name: 'create new',
        value: 'new'
      },
      {
        name: 'extend from',
        value: 'extend'
      }
    ],
  },
  componentName: {
    name: 'componentName',
    message: "Please type component name:",
    default: 'default-component'
  },
  componentCategory: {
    type: 'list',
    name: 'componentCategory',
    message: 'Please choose the component category:',
    choices: ['interaction', 'UI', 'data', 'media', 'overlay'],
  },
  componentType: {
    type: 'list',
    name: 'componentType',
    message: 'Please, choose component type:',
    choices: [
      {
        name: 'static (component without any actions)',
        value: 'static'
      },
      {
        name: 'dynamic (with some actions)',
        value: 'dynamic'
      },
      {
        name: 'system (system component)',
        value: 'system'
      }
    ],
  },
  componentDescription:  {
    name: 'componentDescription',
    message: 'Please type description for the component:',
    default: 'Default description'
  },
  componentScope:  {
    type: 'list',
    name: 'componentScope',
    message: 'Please, choose component scope:',
    choices: [
      {
        name: 'standard (base fusion components)',
        value: 'standard'
      },
      {
        name: 'custom (custom components)',
        value: 'custom'
      }
    ],
  },
  chooseMixins:  {
    type: 'list',
    name: 'chooseMixins',
    message: 'Do you want to add mixins to the new component?',
    choices: [
      {
        name: 'no',
      }, {
        name: 'yes',
      }],
  },
  componentMixins:  {
    type: 'checkbox',
    name: 'componentMixins',
    message: 'Please, choose mixins for adding:',
    choices: () => getMixins,
  },
}

export default prompts
