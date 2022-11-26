import {Layout, Text} from 'uinix-ui';

import {Footnote} from './footnote.js';

export function Section({children, footnote, title}) {
  return (
    <Layout as="section" direction="column" flex="auto" spacing="x12">
      <Text bb="bordered" py="x6" styleVariant="title">
        {title}
        {footnote && <Footnote footnote={footnote} />}
      </Text>
      {children}
    </Layout>
  );
}
