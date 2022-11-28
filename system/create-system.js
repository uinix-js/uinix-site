import {createSystem as _createSystem} from 'uinix-ui';

import {config} from './config.js';
import {system} from './system.js';

export const createSystem = () => {
  if (typeof window !== 'undefined') {
    _createSystem(system, config);
  }
};
