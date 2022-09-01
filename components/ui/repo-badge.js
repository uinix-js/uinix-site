import {Element} from './element.js';
import {Link} from './link.js';

export function RepoBadge({name, type}) {
  const {href, src} = getBadgeProps({name, type});

  return (
    <Link href={href} title={type}>
      <Element as="img" src={src} w="fit-content" />
    </Link>
  );
}

const getBadgeProps = ({name, type}) =>
  ({
    build: {
      href: `https://github.com/uinix-js/${name}/actions`,
      src: `https://github.com/uinix-js/${name}/workflows/main/badge.svg`,
    },
    coverage: {
      href: `https://codecov.io/github/uinix-js/${name}`,
      src: `https://img.shields.io/codecov/c/github/uinix-js/${name}.svg`,
    },
    downloads: {
      href: `https://www.npmjs.com/package/${name}`,
      src: `https://img.shields.io/npm/dm/${name}.svg`,
    },
    license: {
      href: `https://github.com/uinix-js/${name}/blob/main/license`,
      src: `https://img.shields.io/github/license/uinix-js/${name}`,
    },
    size: {
      href: `https://bundlephobia.com/result?p=${name}`,
      src: `https://img.shields.io/bundlephobia/minzip/${name}.svg`,
    },
    stars: {
      href: `https://www.github.com/uinix-js/${name}`,
      src: `https://img.shields.io/github/stars/uinix-js/${name}?style=social`,
    },
    version: {
      href: `https://www.npmjs.com/package/${name}`,
      src: `https://img.shields.io/npm/v/${name}`,
    },
  }[type]);
