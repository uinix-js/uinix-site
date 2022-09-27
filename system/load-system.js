import {createElement as h} from 'react';
import {loadSystem as _loadSystem} from 'uinix-ui';

import {config} from './config.js';
import {system} from './system.js';

export const loadSystem = () => _loadSystem({config, h, system});
