import {Icon, Layout, Text} from 'uinix-ui';

export function Breadcrumbs() {
  return (
    <Layout as="nav">
      <Layout as="ul" align="center" color="text.secondary" spacing="x2">
        <li>
          <Text as="a" href="https://www.apple.com" styleVariant="textLink">
            <Icon icon="logo" size="icon.s" />
          </Text>
        </li>
        <Icon color="border.dark" icon="chevronRight" size="icon.m" />
        <li>
          <Text
            as="a"
            href="https://www.apple.com/mac/"
            styleVariant="textLink"
          >
            Mac
          </Text>
        </li>
        <Icon color="border.dark" icon="chevronRight" size="icon.m" />
        <li>
          <Text styleVariant="textLink">Compare</Text>
        </li>
      </Layout>
    </Layout>
  );
}
