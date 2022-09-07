import {Element} from './element.js';
import {Link} from './link.js';

export function Card({bg, children, href, flex, size = 'm'}) {
  return (
    <Link href={href}>
      <Element bg={bg} boxShadow="card" flex={flex} overflowY="auto" p={size}>
        {children}
      </Element>
    </Link>
  );
}
