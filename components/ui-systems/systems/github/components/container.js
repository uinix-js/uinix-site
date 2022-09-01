import {Element, Layout} from 'uinix-ui';

export function Container({children, header, headerBg}) {
  return (
    <Layout b="bordered" borderRadius="m" direction="column">
      <Element bb="bordered" bg={headerBg} p="m">
        {header}
      </Element>
      {children}
    </Layout>
  );
}
