import {Layout, Text} from 'uinix-ui';

import {repo} from '../data.js';
import {IconText} from './icon-text.js';
import {Section} from './section.js';

export function About() {
  return (
    <Section title="About">
      <Layout direction="column" spacing="m">
        <Text as="p" mt="xs" styleVariant="subtitle">
          {description}
        </Text>
        <IconText as="a" fontWeight="bold" icon="link" href={url} text={url} />
        <Layout wrap spacing="s" wrapSpacing="xs">
          {tags.map((tag) => (
            <Text key={tag} styleVariant="pill">
              {tag}
            </Text>
          ))}
        </Layout>
        <IconText icon="book" href="#top" text="Readme" styleVariant="link" />
        <IconText
          icon="license"
          href="#top"
          styleVariant="link"
          text={`${license} License`}
        />
      </Layout>
    </Section>
  );
}

const {description, license, url, tags} = repo;
