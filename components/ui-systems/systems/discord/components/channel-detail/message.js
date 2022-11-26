import {Layout, Text} from 'uinix-ui';

import {system} from '../../system/system.js';
import {User} from '../user.js';

export function Message({message}) {
  const {at, text, user} = message;

  return (
    <Layout
      align="flex-start"
      justify="space-between"
      px="l"
      py="s"
      spacing="s"
      styles={system.styles.hover}
    >
      <Layout align="center" flex="none" spacing="s">
        <Text styleVariant="messageTime">{at}</Text>
        <User isConcise size="s" user={user} />
      </Layout>
      <Text flex="auto" styleVariant="message">
        {text}
      </Text>
    </Layout>
  );
}
