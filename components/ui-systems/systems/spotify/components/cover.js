import {Element} from 'uinix-ui';

import defaultImage from '../assets/images/liked-songs.png';

export function Cover({alt, size, src = defaultImage.src}) {
  const coverSize = `cover.${size}`;

  return (
    <Element
      as="img"
      alt={alt}
      boxShadow="l"
      src={src}
      h={coverSize}
      w={coverSize}
    />
  );
}
