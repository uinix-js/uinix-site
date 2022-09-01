import {useState} from 'react';
import {Icon, useStyles} from 'uinix-ui';

export function Repeat() {
  const styles = useStyles();
  const [repeatMode, setRepeatMode] = useState(0);

  const isRepeating = repeatMode > 0;
  const isRepeatingOnce = repeatMode > 1;

  return (
    <Icon
      icon={isRepeatingOnce ? 'repeatOne' : 'repeat'}
      size="icon.m"
      styles={isRepeating ? styles.iconBadge : null}
      styleProps={{
        isActive: isRepeating,
      }}
      variant="icon.interactive"
      onClick={() => setRepeatMode((repeatMode + 1) % 3)}
    />
  );
}
