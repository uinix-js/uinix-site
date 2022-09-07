import {Layout} from '../ui/layout.js';
import {NavLinks} from './nav-links.js';

export function FullPageLayout({children}) {
  return (
    <Layout bg="inherit" direction="column" minH="100vh" px="l">
      <NavLinks />
      <Layout direction="column" flex="auto">
        {children}
      </Layout>
    </Layout>
  );
}
