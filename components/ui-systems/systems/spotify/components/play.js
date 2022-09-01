import {useState} from 'react';
import {Element, Icon, useStyles} from 'uinix-ui';

export function Play({hasAccent}) {
  const [isPaused, setIsPaused] = useState(false);
  const styles = useStyles();

  return (
    <Element
      p="s"
      styleProps={{hasAccent, isPaused}}
      styles={styles.iconBackground}
      onClick={() => setIsPaused(!isPaused)}
    >
      <Icon color="inherit" icon={isPaused ? 'pause' : 'play'} size="icon.m" />
    </Element>
  );
}
