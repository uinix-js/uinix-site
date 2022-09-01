import {Layout} from 'uinix-ui';

import {Header} from './components/header.js';
import {Main} from './components/main.js';
import {Footer} from './components/footer.js';

export function App() {
  return (
    <Layout direction="column" spacing="l">
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
}
