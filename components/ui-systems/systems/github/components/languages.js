import {Element, Layout, Text} from 'uinix-ui';

export function Languages({languages}) {
  return (
    <Layout direction="column" spacing="s">
      <Element bg="language.js" borderRadius="pill" h="height.bar" />
      {languages.map(({name, percentage}) => (
        <Layout key={name} align="center" spacing="m">
          <Element bg="language.js" borderRadius="round" h="dot.s" w="dot.s" />
          <Layout align="center" spacing="s">
            <Text as="a" fontSize="small" href="#top" styleVariant="linkBold">
              {name}
            </Text>
            <Text styleVariant="small">{percentage}%</Text>
          </Layout>
        </Layout>
      ))}
    </Layout>
  );
}
