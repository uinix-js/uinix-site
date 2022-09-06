import {FullPageLayout} from '../components/page-layout/full-page-layout.js';
import {PageLayout} from '../components/page-layout/page-layout.js';
import {loadSystem} from '../system/load-system.js';

import '@code-hike/mdx/dist/index.css';

loadSystem();

export default function App({Component, pageProps}) {
  const {isFullPage, description, title} = pageProps;

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
