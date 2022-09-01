import {Layout} from 'uinix-ui';

export function Container({children, ...rest}) {
  return (
    <Layout {...rest} mx="auto" px="x6" w="width.container">
      {children}
    </Layout>
  );
}
