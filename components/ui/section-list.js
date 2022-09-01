import {Layout} from './layout.js';

export function SectionList({children}) {
  return (
    <Layout direction="column" spacing="xl">
      {children}
    </Layout>
  );
}
