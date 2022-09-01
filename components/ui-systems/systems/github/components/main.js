import {Layout} from 'uinix-ui';

import {Aside} from './aside.js';
import {FileNav} from './file-nav.js';
import {Readme} from './readme.js';
import {Repo} from './repo.js';

export function Main() {
  return (
    <Layout justify="center" px="l" spacing="l" w="100%">
      <Layout as="main" direction="column" spacing="m" variant="layout.main">
        <FileNav />
        <Repo />
        <Readme />
      </Layout>
      <Aside />
    </Layout>
  );
}
