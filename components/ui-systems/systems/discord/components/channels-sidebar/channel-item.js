import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

import {system} from '../../system/system.js';
import {IndicatorLayout} from '../indicator-layout.js';
import {User} from '../user.js';

const actionsClassName = 'actions';

export function ChannelItem({channel, isActive, onSelect}) {
  const {hasNotification, id, name, type} = channel;
  const isTextChannel = type === 'text';
  const icon = isTextChannel ? 'channel' : 'voice';
  const textColor = isTextChannel ? 'text.accent' : undefined;

  return (
    <>
      <IndicatorLayout as="li" align="center" hasIndicator={hasNotification}>
        <Layout
          bg={isActive ? 'background.modifier.selected' : undefined}
          borderRadius="m"
          flex="auto"
          justify="space-between"
          mx="s"
          p="s"
          spacing="s"
          styles={[
            system.styles.flexFit,
            system.styles.hover,
            componentStyles.hoverActions,
          ]}
          onClick={() => onSelect(id)}
        >
          <Layout
            align="center"
            flex="auto"
            spacing="s"
            styles={system.styles.flexFit}
          >
            <Icon color="text.muted" icon={icon} size="icon.m" />
            <Text truncate color={textColor} styleVariant="channelName">
              {name}
            </Text>
          </Layout>
          <Layout
            align="center"
            className={actionsClassName}
            color="channel.default"
            flex="none"
            spacing="s"
            styles={componentStyles.actions}
          >
            <Icon icon="invite" size="icon.s" onClick={noop} />
            <Icon icon="settings" size="icon.s" onClick={noop} />
          </Layout>
        </Layout>
      </IndicatorLayout>
      {isActive && !isTextChannel && (
        <Layout direction="column" pl="l" py="s">
          <User size="s" user={{name: 'John Doe'}} />
        </Layout>
      )}
    </>
  );
}

const componentStyles = {
  hoverActions: {
    [`:hover .${actionsClassName}`]: {
      display: 'flex',
    },
  },
  actions: {
    display: 'none',
  },
};
