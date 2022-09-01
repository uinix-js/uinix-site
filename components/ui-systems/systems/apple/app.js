import {Layout} from 'uinix-ui';

import {Footer} from './components/footer.js';
import {Header} from './components/header.js';
import {Main} from './components/main.js';

export function App() {
  return (
    <Layout direction="column">
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
}
