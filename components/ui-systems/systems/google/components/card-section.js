import {Element} from 'uinix-ui';

export function CardSection({children}) {
  return (
    <Element as="section" bb="bordered" p="x4">
      {children}
    </Element>
  );
}
