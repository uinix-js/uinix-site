import {Text} from 'uinix-ui';

export function GrayLink({children, href}) {
  return (
    <Text as="a" href={href} styleVariant="grayLink">
      {children}
    </Text>
  );
}
