import {Layout} from 'uinix-ui';

import {system} from '../../system/system.js';
import {messages} from '../../data.js';
import {Message} from './message.js';
import {PostMessage} from './post-message.js';

export function Messages() {
  return (
    <Layout
      as="main"
      direction="column"
      flex="auto"
      styles={system.styles.scrollable}
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <PostMessage />
    </Layout>
  );
}
