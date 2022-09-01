import fs from 'node:fs';
import glob from 'glob';

import {CardList} from '../../components/ui/card-list.js';
import {Layout} from '../../components/ui/layout.js';
import {RepoBadge} from '../../components/ui/repo-badge.js';
import {Section} from '../../components/ui/section.js';
import {getFilename} from '../../utils/get-filename.js';
import {pages} from '../../data/pages.js';
import {humanize} from '../../utils/humanize.js';
import {sortByOrder} from '../../utils/sort-by-order.js';

export const getStaticPaths = () => {
  const paths = pages.packages.cards.map(({title}) => ({
    params: {
      name: title,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({params}) => {
  const {name} = params;

  const packageJson = JSON.parse(
    fs.readFileSync(`node_modules/${name}/package.json`),
  );

  const cards = glob
    .sync(`pages/packages/${name}/*`)
    .map((filepath) => {
      const filename = getFilename(filepath);
      return {
        href: `/packages/${name}/${filename}`,
        title: humanize(filename),
      };
    })
    .sort(sortByOrder({key: 'title', order: ['Readme']}));

  return {
    props: {
      cards,
      description: packageJson.description,
      title: name,
    },
  };
};

export default function Page({cards, title: name}) {
  return (
    <Layout direction="column" spacing="l">
      <Layout wrap spacing="s">
        <RepoBadge name={name} type="stars" />
        <RepoBadge name={name} type="version" />
        <RepoBadge name={name} type="size" />
        <RepoBadge name={name} type="build" />
        <RepoBadge name={name} type="coverage" />
        <RepoBadge name={name} type="downloads" />
        <RepoBadge name={name} type="license" />
      </Layout>
      <Section title="Guides">
        <CardList cards={cards} />
      </Section>
    </Layout>
  );
}
