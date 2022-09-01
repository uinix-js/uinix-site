import {Layout} from 'uinix-ui';

import {ChannelsSidebar} from './components/channels-sidebar/channels-sidebar.js';
import {ChannelDetail} from './components/channel-detail/channel-detail.js';
import {Servers} from './components/servers/servers.js';

export function App() {
  return (
    <Layout h="100vh">
      <Servers />
      <ChannelsSidebar />
      <ChannelDetail />
    </Layout>
  );
}
