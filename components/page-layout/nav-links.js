import {useRouter} from 'next/router';
import {useMemo} from 'react';
import {props} from 'uinix-fp';

import {system} from '../../system/system.js';
import {useToc} from '../../hooks/use-toc.js';
import {BrandText} from '../ui/brand-text.js';
import {Layout} from '../ui/layout.js';
import {Link} from '../ui/link.js';
import {TocSelect} from './toc-select.js';

export function NavLinks() {
  const {asPath} = useRouter();

  const pathname = asPath.split('#')[0];

  const tocOptions = useMemo(
    () => ({
      includeSelector: 'main',
      headings: ['h2', 'h3', 'h4'],
      id: pathname,
      offsetY: props('spacings.offsets.navLinks.height')(system.theme),
    }),
    [pathname],
  );

  const {activeHeadingId, permalink, toc} = useToc(tocOptions);

  const subpaths = pathname.split('/');
  const hasSubpaths = subpaths.join('') !== '';

  const rootLink = (
    <li>
      <BrandText enableLink title="Back to home" />
    </li>
  );

  let href = '';
  const lastIndex = subpaths.length - 1;
  const links = subpaths.map((part, i) => {
    const isLast = i === lastIndex;
    const hrefText = `${part}${isLast ? '' : '/'}`;
    href += hrefText;
    return (
      <li key={href}>
        <Link href={href} title={`Back to ${isLast ? 'top' : href}`}>
          {hrefText}
        </Link>
      </li>
    );
  });

  return (
    hasSubpaths && (
      <Layout wrap align="center" h="navLinks.height" styleVariant="sticky.top">
        <nav>
          <Layout wrap as="ol">
            {rootLink}
            {links}
          </Layout>
        </nav>
        <TocSelect toc={toc} value={activeHeadingId} onChange={permalink} />
      </Layout>
    )
  );
}
