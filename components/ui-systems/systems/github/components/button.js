import {Icon, Layout, Text} from 'uinix-ui';

import {system} from '../system/system.js';

export function Button({
  count = null,
  icon,
  text,
  variant = 'default',
  onClick,
  onExpand,
}) {
  const hasCount = count !== null;

  return (
    <Layout
      as="button"
      flex="none"
      px={hasCount ? 's' : 'm'}
      py="0"
      styleVariant={`button.${variant}`}
      onClick={onClick}
    >
      <Layout align="center" flex="none" spacing="s">
        {icon && <Icon icon={icon} size="icon.m" />}
        <Text
          pr={hasCount ? 's' : undefined}
          styles={onExpand ? system.styles.caret : null}
          styleVariant="button.text"
        >
          {text}
        </Text>
      </Layout>
      {count && (
        <Layout align="center" bl="bordered" pl="s">
          <Text styleVariant="button.text">{count}</Text>
        </Layout>
      )}
    </Layout>
  );
}
