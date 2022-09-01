import {Heading} from './heading.js';
import {Link} from './link.js';

export function Section({as = 'h2', children, description, href, title}) {
  const heading = <Heading as={as}>{title}</Heading>;

  return (
    <section>
      <Link href={href}>{heading}</Link>
      {description && <p>{description}</p>}
      {children}
    </section>
  );
}
