import {useState} from 'react';
import {Icon, useStyles} from 'uinix-ui';

export function Shuffle() {
  const styles = useStyles();
  const [isShuffling, setIsShuffling] = useState(false);

  return (
    <Icon
      icon="shuffle"
      size="icon.m"
      styles={isShuffling ? styles.iconBadge : null}
      styleProps={{
        isActive: isShuffling,
      }}
      variant="icon.interactive"
      onClick={() => setIsShuffling(!isShuffling)}
    />
  );
}
