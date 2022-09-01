import {Text} from './text.js';

export function Heading({as, children}) {
  return (
    <Text as={as} m={0}>
      {children}
    </Text>
  );
}
