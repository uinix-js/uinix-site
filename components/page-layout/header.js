import {BrandText} from '../ui/brand-text.js';
import {GithubLink} from '../ui/github-link.js';
import {Layout} from '../ui/layout.js';
import {Text} from '../ui/text.js';
import {Navbar} from './navbar.js';

export function Header() {
  return (
    <Layout as="header" align="center" flex="none" py="s" spacing="m">
      <Text fontSize="l">
        <BrandText href="/" />
      </Text>
      <Navbar />
      <GithubLink href="https://github.com/uinix-js" />
    </Layout>
  );
}
