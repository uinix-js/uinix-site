import {Layout, useStyles} from 'uinix-ui';

import {messages} from '../../data.js';
import {Message} from './message.js';
import {PostMessage} from './post-message.js';

export function Messages() {
  const styles = useStyles();

  return (
    <Layout as="main" direction="column" flex="auto" styles={styles.scrollable}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <PostMessage />
    </Layout>
  );
}
