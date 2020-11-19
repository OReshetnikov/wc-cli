const imports = (mixins) => {
  return {
    standard: `import { css, html } from 'lit-element';
import { FusionBase } from '../../base';
import {
  applyMixins, ${mixins},
} from '../../mixins';
import { FusionLogger } from '../../services/fusion-logger';`,
    custom: `import { css, html } from 'lit-element';
import {
  applyMixins, ${mixins},
} from '../../mixins';
import { FusionBase } from '../../fusion/base';
import { FusionLogger } from '../../fusion/services/fusion-logger';`,
  }
}

export default imports
