import {Icon} from './icon.js';
import {Link} from './link.js';

export function GithubLink({href}) {
  return (
    <Link href={href}>
      <Icon icon="github" size="m" title={href} />
    </Link>
  );
}
