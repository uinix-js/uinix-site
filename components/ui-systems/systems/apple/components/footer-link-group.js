import {Layout, Text} from 'uinix-ui';

export function FooterLinkGroup({group}) {
  const {name, links} = group;
  return (
    <Layout as="ul" direction="column" spacing="x1">
      <Text as="h3" styleVariant="small">
        {name}
      </Text>
      {links.map(({title, href}) => (
        <li key={title}>
          <Text as="a" href={href} styleVariant="textLink">
            {title}
          </Text>
        </li>
      ))}
    </Layout>
  );
}
