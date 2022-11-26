import {system} from '../../system/system.js';
import {BrandText} from './brand-text.js';
import {Card} from './card.js';
import {Element} from './element.js';

export function CardList({cards, columns = 3}) {
  return (
    <Element styles={system.styles.grid} styleProps={{columns}}>
      {cards.map(({href, title}) => (
        <Card key={href} href={href}>
          <BrandText text={title} />
        </Card>
      ))}
    </Element>
  );
}
