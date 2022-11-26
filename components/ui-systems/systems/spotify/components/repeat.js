import {useState} from 'react';
import {Icon} from 'uinix-ui';

import {system} from '../system/system.js';

export function Repeat() {
  const [repeatMode, setRepeatMode] = useState(0);

  const isRepeating = repeatMode > 0;
  const isRepeatingOnce = repeatMode > 1;

  return (
    <Icon
      icon={isRepeatingOnce ? 'repeatOne' : 'repeat'}
      size="icon.m"
      styles={isRepeating ? system.styles.iconBadge : null}
      styleProps={{
        isActive: isRepeating,
      }}
      styleVariant="icon.interactive"
      onClick={() => setRepeatMode((repeatMode + 1) % 3)}
    />
  );
}
