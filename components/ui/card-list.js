import {useStyles} from 'uinix-ui';

import {BrandText} from './brand-text.js';
import {Card} from './card.js';
import {Element} from './element.js';

export function CardList({cards, columns = 3}) {
  const styles = useStyles();

  return (
    <Element styles={styles.rules.grid} styleProps={{columns}}>
      {cards.map(({href, title}) => (
        <Card key={href} href={href}>
          <BrandText text={title} />
        </Card>
      ))}
    </Element>
  );
}
