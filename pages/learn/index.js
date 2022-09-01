import {CardList} from '../../components/ui/card-list.js';
import {pages} from '../../data/pages.js';

const {cards, info} = pages.learn;

export const getStaticProps = () => ({
  props: info,
});

export default function Page() {
  return <CardList cards={cards} />;
}
