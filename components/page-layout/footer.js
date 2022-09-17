import {BrandText} from '../ui/brand-text.js';
import {Layout} from '../ui/layout.js';

export function Footer() {
  return (
    <Layout align="center" flex="none" pt="xl" py="s" spacing="s">
      <small>© {new Date().getFullYear()}</small> <BrandText enableLink />
    </Layout>
  );
}
