import {Element} from 'uinix-ui';

import avatar from '../assets/images/avatar.jpg';

export function Avatar({
  borderRadius = 'round',
  size,
  src = avatar.src,
  status,
  statusBg = 'background.secondary',
}) {
  const avatarSize = `avatar.${size}`;

  return (
    <Element borderRadius={borderRadius} position="relative">
      <Element
        as="img"
        borderRadius={borderRadius}
        h={avatarSize}
        src={src}
        w={avatarSize}
      />
      {status && (
        <Element
          bg={statusBg}
          borderRadius="round"
          bottom="xxs"
          p="xs"
          position="absolute"
          right={0}
        >
          <Element bg={`status.${status}`} borderRadius="round" p="xs" />
        </Element>
      )}
    </Element>
  );
}
