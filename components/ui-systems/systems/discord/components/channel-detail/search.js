import {useState} from 'react';
import {Element, Icon, Layout} from 'uinix-ui';

export function Search() {
  const [query, setQuery] = useState('');

  return (
    <Layout
      align="center"
      bg="background.tertiary"
      borderRadius="m"
      color="text.muted"
      justify="space-between"
      p="xs"
      spacing="m"
      w="width.search"
    >
      <Element
        as="input"
        placeholder="Search"
        value={query}
        variant="input.search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Icon icon="search" size="icon.m" />
    </Layout>
  );
}
