import {Layout, Text} from 'uinix-ui';

import {Card} from './card.js';
import {CardSummary} from './card-summary.js';

export function Section({
  cards,
  cardVariant,
  description,
  showMore = 'See all',
  title,
  titleVariant = 'xl',
}) {
  const CardComponent = cardVariant === 'summary' ? CardSummary : Card;

  return (
    <Layout as="section" direction="column" spacing="m">
      <Layout align="flex-end" justify="space-between">
        <Layout direction="column">
          <Text as="h2" styleVariant={titleVariant}>
            {title}
          </Text>
          {description && <Text styleVariant="text.m">{description}</Text>}
        </Layout>
        {showMore && (
          <Text
            as="a"
            color="text.secondary"
            href="#top"
            styleVariant="text.caps"
          >
            {showMore}
          </Text>
        )}
      </Layout>
      <Layout wrap spacing="l" wrapSpacing="m">
        {cards.map((card, i) => (
          <CardComponent key={i} {...card} />
        ))}
      </Layout>
    </Layout>
  );
}
