import {Element, Layout} from 'uinix-ui';

import {system} from '../../system/system.js';
import {memberGroups} from '../../data.js';
import {User} from '../user.js';

export function MembersSidebar() {
  return (
    <Layout
      as="aside"
      bg="background.secondary"
      direction="column"
      flex="none"
      px="m"
      py="l"
      spacing="l"
      styles={system.styles.scrollable}
      w="width.sidebar.members"
    >
      {memberGroups.map(({name, members}) => (
        <Layout key={name} direction="column" spacing="s">
          <h2>
            {name} — {members.length}
          </h2>
          {members.map((user) => (
            <Element
              key={user.id}
              borderRadius="l"
              px="s"
              py="xxs"
              styles={system.styles.hover}
            >
              <User user={user} size="m" />
            </Element>
          ))}
        </Layout>
      ))}
    </Layout>
  );
}
