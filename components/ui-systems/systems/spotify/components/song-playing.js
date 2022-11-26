import {useState} from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

import {system} from '../system/system.js';
import {Cover} from './cover.js';

export function SongPlaying({artist, song}) {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <Layout align="center" spacing="m" styles={system.styles.footerSection}>
      <Cover size="s" />
      <Layout truncate direction="column">
        <Text truncate as="a" href="#top" styleVariant="text.s">
          {song}
        </Text>
        <Text
          truncate
          as="a"
          color="text.secondary"
          href="#top"
          styleVariant="text.xs"
        >
          {artist}
        </Text>
      </Layout>
      <Icon
        icon={isLiked ? 'heart' : 'heartOutline'}
        size="icon.m"
        styleProps={{
          isActive: isLiked,
        }}
        styleVariant="icon.interactive"
        onClick={() => setIsLiked(!isLiked)}
      />
    </Layout>
  );
}
