import {Layout} from 'uinix-ui';

import {CompareSummary} from './compare-summary.js';
import {Compare} from './compare.js';
import {Hero} from './hero.js';
import {LearnMore} from './learn-more.js';
import {QuickLook} from './quick-look.js';

export function Main() {
  return (
    <Layout as="main" direction="column" spacing="x25">
      <Layout direction="column" spacing="x10">
        <Hero />
        <CompareSummary />
      </Layout>
      <QuickLook />
      <Compare />
      <LearnMore />
    </Layout>
  );
}
