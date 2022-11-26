import {MDXProvider} from '@mdx-js/react';
import {Element, Icon, Layout, Text} from 'uinix-ui';

import ReadmeContents from '../readme.md';
import {Container} from './container.js';

export function Readme() {
  const header = (
    <Layout align="center" spacing="m">
      <Icon color="icon.default" icon="listUnordered" size="icon.m" />
      <Text as="a" href="#top" styleVariant="linkBold">
        readme.md
      </Text>
    </Layout>
  );

  return (
    <Container header={header}>
      <Element className="markdown-body" p="l">
        <MDXProvider>
          <ReadmeContents />
        </MDXProvider>
      </Element>
    </Container>
  );
}
