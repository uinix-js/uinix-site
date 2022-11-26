import {Icon, Layout} from 'uinix-ui';

import {system} from '../system/system.js';
import {Progress} from './progress.js';

export function ExtraControls() {
  return (
    <Layout
      align="center"
      justify="flex-end"
      spacing="m"
      styles={system.styles.footerSection}
    >
      <Icon icon="volume" size="icon.m" styleVariant="icon.interactive" />
      <Progress max={10} value={4} width="width.volume" />
      <Icon icon="fullscreen" size="icon.m" styleVariant="icon.interactive" />
    </Layout>
  );
}
