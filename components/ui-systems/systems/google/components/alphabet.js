import {Text} from 'uinix-ui';

export function Alphabet({color, value}) {
  return (
    <Text color={`brand.${color}`} styleVariant="alphabet">
      {value}
    </Text>
  );
}
