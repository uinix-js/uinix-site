import {BrandText} from '../ui/brand-text.js';
import {Card} from '../ui/card.js';

export function Banner({description, title}) {
  return (
    <Card bg="background.wash" size="l">
      <h1>
        <BrandText text={title} />
      </h1>
      <p>{description}</p>
    </Card>
  );
}
