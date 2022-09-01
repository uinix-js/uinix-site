import {Layout} from 'uinix-ui';

import {CompareSpec} from './compare-spec.js';
import {Section} from './section.js';

export function CompareGroup({footnote, models, spec, title}) {
  return (
    <Section footnote={footnote} title={title}>
      <Layout justify="space-between" spacing="x6">
        {models.map((model) => (
          <CompareSpec key={model.name} model={model} spec={spec} />
        ))}
      </Layout>
    </Section>
  );
}
