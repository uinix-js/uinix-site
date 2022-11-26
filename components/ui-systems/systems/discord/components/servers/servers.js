import {useState} from 'react';
import {Element, Layout} from 'uinix-ui';

import {system} from '../../system/system.js';
import {servers} from '../../data.js';
import {Server} from './server.js';

export function Servers() {
  const [activeServer, setActiveServer] = useState(servers[0].id);

  return (
    <Element as="nav" bg="background.tertiary">
      <Layout
        as="ul"
        align="center"
        direction="column"
        py="m"
        spacing="s"
        styleProps={{scrollbarWidth: 'none '}}
        styles={system.styles.scrollable}
        w="width.sidebar.servers"
      >
        {servers.map((server) => (
          <Server
            key={server.id}
            isActive={server.id === activeServer}
            server={server}
            onSelect={setActiveServer}
          />
        ))}
      </Layout>
    </Element>
  );
}
