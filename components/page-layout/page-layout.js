import Head from 'next/head';

import {Element} from '../ui/element.js';
import {Layout} from '../ui/layout.js';
import {Banner} from './banner.js';
import {Footer} from './footer.js';
import {Header} from './header.js';
import {NavLinks} from './nav-links.js';

export function PageLayout({children, description, title}) {
  return (
    <>
      <Head>
        <title>uinix-js</title>
      </Head>
      <Layout
        bg="background.primary"
        direction="column"
        maxW="container.width"
        minH="100vh"
        m="0 auto"
        px="l"
        w="100%"
      >
        <Header />
        <NavLinks />
        {title && <Banner description={description} title={title} />}
        <Element as="main" flex="auto" py="xl">
          {children}
        </Element>
        <Footer />
      </Layout>
    </>
  );
}
