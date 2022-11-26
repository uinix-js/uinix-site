import {Layout, Text} from 'uinix-ui';

export function Hero() {
  return (
    <Layout
      as="section"
      align="center"
      direction="column"
      pb="x8"
      pt="x30"
      spacing="x4"
    >
      <Text as="h1">Compare Mac models</Text>
      <Text styleVariant="subtitle">
        <Text as="a" href="#top" styleVariant="subtitle">
          See all models
        </Text>
      </Text>
      <Text as="p" styleVariant="subtitle">
        Get help choosing. <a href="#top">Contact us</a>.
      </Text>
    </Layout>
  );
}
