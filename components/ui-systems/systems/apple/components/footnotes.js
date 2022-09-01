import {Layout, Text} from 'uinix-ui';

import {footnotes} from '../data.js';
import {createFootnoteId} from '../util.js';

export function Footnotes() {
  return (
    <Layout as="section">
      <Layout as="ol" direction="column" spacing="x3">
        {footnotes.map((footnote, i) => {
          const id = createFootnoteId(i);
          return (
            <Text key={id} as="li" color="text.light" id={id} variant="small">
              {footnote}
            </Text>
          );
        })}
      </Layout>
    </Layout>
  );
}
