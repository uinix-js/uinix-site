import {useState} from 'react';
import {Icon, Layout, Text, useStyles} from 'uinix-ui';

import {Cover} from './cover.js';

export function SongPlaying({artist, song}) {
  const [isLiked, setIsLiked] = useState(true);
  const styles = useStyles();

  return (
    <Layout align="center" spacing="m" styles={styles.footerSection}>
      <Cover size="s" />
      <Layout truncate direction="column">
        <Text truncate as="a" href="#top" variant="s">
          {song}
        </Text>
        <Text truncate as="a" color="text.secondary" href="#top" variant="xs">
          {artist}
        </Text>
      </Layout>
      <Icon
        icon={isLiked ? 'heart' : 'heartOutline'}
        size="icon.m"
        styleProps={{
          isActive: isLiked,
        }}
        variant="icon.interactive"
        onClick={() => setIsLiked(!isLiked)}
      />
    </Layout>
  );
}
