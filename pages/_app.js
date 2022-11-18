import {useEffect, useState} from 'react';

import {FullPageLayout} from '../components/page-layout/full-page-layout.js';
import {PageLayout} from '../components/page-layout/page-layout.js';
import {createSystem} from '../system/load-system.js';

import '@code-hike/mdx/dist/index.css';

createSystem();

export default function App({Component, pageProps}) {
  const isReady = useIsReady();

  const {isFullPage, description, title} = pageProps;

  if (!isReady) {
    return null;
  }

  const contents = <Component {...pageProps} />;

  if (isFullPage) {
    return <FullPageLayout>{contents}</FullPageLayout>;
  }

  return (
    <PageLayout description={description} title={title}>
      {contents}
    </PageLayout>
  );
}

// Hack around fela FOUC
const useIsReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return isReady;
};
