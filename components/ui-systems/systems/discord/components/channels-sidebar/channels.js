import {useState} from 'react';
import {Layout} from 'uinix-ui';

import {ChannelItem} from './channel-item.js';

export function Channels({channels}) {
  const [activeChannel, setActiveChannel] = useState(channels[0].id);

  return (
    <Layout direction="column" spacing="xxs">
      {channels.map((channel) => (
        <ChannelItem
          key={channel.id}
          isActive={activeChannel === channel.id}
          channel={channel}
          onSelect={setActiveChannel}
        />
      ))}
    </Layout>
  );
}
