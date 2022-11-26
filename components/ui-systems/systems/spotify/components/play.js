import {useState} from 'react';
import {Element, Icon} from 'uinix-ui';

import {system} from '../system/system.js';

export function Play({hasAccent}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Element
      p="s"
      styleProps={{hasAccent, isPaused}}
      styles={system.styles.iconBackground}
      onClick={() => setIsPaused(!isPaused)}
    >
      <Icon color="inherit" icon={isPaused ? 'pause' : 'play'} size="icon.m" />
    </Element>
  );
}
