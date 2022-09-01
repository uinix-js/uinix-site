import {Layout} from 'uinix-ui';

import {Footer} from './components/footer.js';
import {Header} from './components/header.js';
import {Main} from './components/main.js';
import {Tabs} from './components/tabs.js';

import '@fontsource/open-sans';

export function App() {
  return (
    <Layout direction="column">
      <Layout direction="column" spacing="x6">
        <Header />
        <Tabs />
      </Layout>
      <Main />
      <Footer />
    </Layout>
  );
}
