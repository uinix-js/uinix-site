import {Text} from 'uinix-ui';

import {createFootnoteId} from '../util.js';

export function Footnote({footnote}) {
  return (
    <Text as="a" href={`#${createFootnoteId(footnote)}`} variant="footnoteLink">
      <sup>{footnote}</sup>
    </Text>
  );
}
