import {Element} from 'uinix-ui';

export function Container({children}) {
  return (
    <Element flex="none" ml="offset.containerLeft" w="width.container">
      {children}
    </Element>
  );
}
