import {Link} from './link.js';
import {Text} from './text.js';

export function BrandText({href, text = 'uinix-js', title}) {
  const parts = text.split(/^(ui)(nix)(-?[\w-]*)$/);

  if (parts.length === 1) {
    return text;
  }

  const [_head, ui, nix, rest] = parts;

  return (
    <Link href={href} title={title}>
      <Text color="brand.primary">{ui}</Text>
      <Text color="brand.secondary">{nix}</Text>
      <Text color="brand.light">{rest}</Text>
    </Link>
  );
}
