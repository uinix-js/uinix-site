import {CardList} from '../components/ui/card-list.js';
import {Section} from '../components/ui/section.js';
import {SectionList} from '../components/ui/section-list.js';
import {pages} from '../data/pages.js';

export const getStaticProps = () => ({
  props: {
    title: 'As minimal as it gets for rapidly building UIs.',
    description:
      'Framework-agnostic, build-free and configurable. Your UI your rules 🤘.',
  },
});

export default function Page() {
  return (
    <SectionList>
      {Object.values(pages).map(({cards, info}) => (
        <Section key={info.href} {...info}>
          <CardList cards={cards} />
        </Section>
      ))}
    </SectionList>
  );
}
