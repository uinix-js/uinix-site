import {noop} from 'uinix-fp';
import {Element, Icon, Layout} from 'uinix-ui';

export function PostMessage() {
  return (
    <Layout bg="background.primary" bottom={0} p="l" position="sticky">
      <Layout
        align="center"
        bg="background.channelTextarea"
        borderRadius="l"
        flex="auto"
        justify="space-between"
        p="m"
        spacing="m"
      >
        <Icon icon="create" size="icon.l" onClick={noop} />
        <Element
          as="input"
          placeholder="Message #uinix-ui"
          styleVariant="input.channelTextArea"
        />
        <Layout align="center" spacing="m">
          <Icon icon="gift" size="icon.l" onClick={noop} />
          <Icon icon="gif" size="icon.l" onClick={noop} />
          <Icon icon="emoji" size="icon.l" onClick={noop} />
        </Layout>
      </Layout>
    </Layout>
  );
}
