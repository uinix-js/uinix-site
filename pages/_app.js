import {PageLayout} from '../components/page-layout/page-layout.js';
import {loadSystem} from '../system/load-system.js';

import '@code-hike/mdx/dist/index.css';

loadSystem();

export default function App({Component, pageProps}) {
  const {description, disableLayout, title} = pageProps;

  const contents = <Component {...pageProps} />;

  if (disableLayout) {
    return contents;
  }

  return (
    <PageLayout description={description} title={title}>
      {contents}
    </PageLayout>
  );
}
