import themeSpec from 'uinix-theme-spec';
import {createSystem} from 'uinix-ui';

import {icons} from './icons.js';
import {styles} from './styles.js';
import {theme} from './theme.js';

export const system = createSystem({
  icons,
  styles,
  theme,
  themeSpec,
});
