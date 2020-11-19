import Handlebars from 'handlebars';
import imports from '../config/baseImports'


Handlebars.registerHelper("getCorrectImports", function(scope, mixins) {
  return new Handlebars.SafeString(imports(mixins)[scope])
});

const source = `{{getCorrectImports getOptions.componentScope getOptions.componentMixins}}

class Fusion{{getOptions.className}} extends applyMixins(FusionBase, [{{getOptions.componentMixins}}]) {
  static get properties() {
    return {
      ...super.properties,
      width: {
        type: String,
        fieldType: 'Number',
        value: '360px',
        min: 0,
      },
      'background-color': {
        type: String,
        fieldType: 'ColorPicker',
        value: 'rgba(0, 0, 0, 0)',
      },
      'select-text': {
        type: String,
        fieldType: 'Select',
        value: 'middle',
        selectOptions: [
          'top',
          'middle',
          'bottom',
        ],
      },
    };
  }

  static get options() {
    return {
      ...super.options,
      componentName: '{{getOptions.componentName}}',
      componentType: '{{getOptions.componentType}}',
      componentCategory: '{{getOptions.componentCategory}}',
      componentUIName: '{{getOptions.componentUIName}}',
      componentScope: '{{getOptions.componentScope}}',
      componentDescription: '{{getOptions.componentDescription}}',
      componentDomain: 'slide',
      isTextEdit: false,
      isRootNested: true,
      nestedComponents: [],
      defaultTemplate: '',
      resizable: 'all',
      draggable: 'xy',
      rotatable: true,
      sortable: false,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    FusionLogger.log('the connectedCallback block was called');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    FusionLogger.log('the disconnectedCallback block was called');
  }

  update(changedProps) {
    super.update(changedProps);
    if (this.isRendered) {
      FusionLogger.log('the update block was called');
    }
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    FusionLogger.log('the firstUpdated block was called');
  }

  static get styles() {
    return [
      super.styles,
      css\`
        :host {
          width: var(--width);
          height: auto;
          background-color: var(--background-color);
        }
      \`,
    ];
  }

  render() {
    super.render();
    return html\`
      <style>
        \${this.dynamicStyles}
      </style>
      <div class='content'>
        <p>Text from the selected properties: \${this['select-text']}</p>
         <slot></slot>
      </div>
      \${this.constructor.systemSlotTemplate}
    \`;
  }
}

export { Fusion{{getOptions.className}} };
`

const baseWc = Handlebars.compile(source);
export default baseWc
