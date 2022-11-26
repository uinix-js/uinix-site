import {Icon, Layout, Text} from 'uinix-ui';

import {LOREM_IPSUM} from '../data.js';

export function RelatedSearch() {
  return (
    <Layout
      align="center"
      bg="background.wash"
      borderRadius="pill"
      flex="0 0 45%"
      px="x6"
      py="x3"
      spacing="x6"
    >
      <Icon
        color="icon.default"
        icon="search"
        size="icon.m"
        title="related search"
      />
      <Text styleVariant="subtitle2">{LOREM_IPSUM}</Text>
    </Layout>
  );
}
