import NextLink from 'next/link';

export function Link({children, href, title}) {
  if (!href) {
    return children;
  }

  return (
    <NextLink href={href} title={title}>
      {children}
    </NextLink>
  );
}
