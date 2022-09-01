import {pages} from '../../data/pages.js';
import {Layout} from '../ui/layout.js';
import {Link} from '../ui/link.js';

export function Navbar() {
  return (
    <nav>
      <Layout as="ul" spacing="m">
        {Object.values(pages).map((page) => {
          const {href, title} = page.info;
          return (
            <li key={href}>
              <Link href={href}>{title}</Link>
            </li>
          );
        })}
      </Layout>
    </nav>
  );
}
