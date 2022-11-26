import {Layout, Text} from 'uinix-ui';

export function Section({children, description, title}) {
  return (
    <Layout as="section" direction="column">
      <Text as="h2" mb="m" styleVariant="subtitle">
        {title}
      </Text>
      {description && (
        <Layout direction="column">
          <Text styleVariant="small">{description}</Text>
        </Layout>
      )}
      {children}
    </Layout>
  );
}
