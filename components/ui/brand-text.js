import {Link} from './link.js';
import {Text} from './text.js';

export function BrandText({enableLink = false, text = 'uinix-js', title}) {
  const parts = text.split(/^(ui)(nix)(-?[\w-]*)$/);

  if (parts.length === 1) {
    return text;
  }

  const [_head, ui, nix, rest] = parts;

  const href = enableLink
    ? text === 'uinix-js'
      ? '/'
      : `/packages/${text}`
    : undefined;

  return (
    <Link href={href} title={title}>
      <Text color="brand.primary">{ui}</Text>
      <Text color="brand.secondary">{nix}</Text>
      <Text color="brand.light">{rest}</Text>
    </Link>
  );
}
