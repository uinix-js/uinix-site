import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

export function Header() {
  return (
    <Layout as="header" bg="background.gray4" justify="flex-end" px="l" py="m">
      <Layout
        align="center"
        bg="background.gray2"
        borderRadius="pill"
        px="s"
        py="xxs"
        spacing="m"
        onClick={noop}
      >
        <Icon icon="user" size="icon.m" styleVariant="icon.interactive" />
        <Text color="text.primary" fontWeight="bold" styleVariant="text.m">
          John Doe
        </Text>
        <Icon icon="arrowDown" size="icon.m" styleVariant="icon.interactive" />
      </Layout>
    </Layout>
  );
}
