import {Layout} from 'uinix-ui';

import {system} from '../../system/system.js';
import {channelGroups} from '../../data.js';
import {ChannelGroup} from './channel-group.js';
import {Me} from './me.js';

export function ChannelsSidebar() {
  return (
    <Layout
      as="nav"
      bg="background.secondary"
      direction="column"
      w="width.sidebar.channels"
    >
      <Layout
        as="h1"
        align="center"
        boxShadow="elevation.m"
        flex="none"
        h="height.header"
        px="m"
      >
        uinix-ui
      </Layout>
      <Layout
        direction="column"
        py="l"
        spacing="m"
        styles={system.styles.scrollable}
      >
        {channelGroups.map((channelGroup) => (
          <ChannelGroup key={channelGroup.name} channelGroup={channelGroup} />
        ))}
      </Layout>
      <Me />
    </Layout>
  );
}
