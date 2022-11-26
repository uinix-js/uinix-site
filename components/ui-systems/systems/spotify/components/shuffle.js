import {useState} from 'react';
import {Icon} from 'uinix-ui';

import {system} from '../system/system.js';

export function Shuffle() {
  const [isShuffling, setIsShuffling] = useState(false);

  return (
    <Icon
      icon="shuffle"
      size="icon.m"
      styles={isShuffling ? system.styles.iconBadge : null}
      styleProps={{
        isActive: isShuffling,
      }}
      styleVariant="icon.interactive"
      onClick={() => setIsShuffling(!isShuffling)}
    />
  );
}
