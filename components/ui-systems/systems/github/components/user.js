import {Element, Layout, Text} from 'uinix-ui';

import avatar from '../assets/images/avatar.jpg';

export function User({user}) {
  const avatarSize = 'avatar.m';

  return (
    <Layout align="center" spacing="m">
      <Element
        as="img"
        borderRadius="round"
        h={avatarSize}
        src={user.avatar || avatar.src}
        w={avatarSize}
      />
      <Text as="a" href="https://github.com/chrisrzhou" variant="linkBold">
        {user.name}
      </Text>
    </Layout>
  );
}
