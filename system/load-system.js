import {createElement as h} from 'react';
import {load} from 'uinix-ui';

import {config} from './config.js';
import {system} from './system.js';

export const loadSystem = () => load({config, h, system});
