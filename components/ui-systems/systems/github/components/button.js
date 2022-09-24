import {Icon, Layout, Text, useStyles} from 'uinix-ui';

export function Button({
  count = null,
  icon,
  text,
  variant = 'default',
  onClick,
  onExpand,
}) {
  const styles = useStyles();

  const hasCount = count !== null;

  return (
    <Layout
      as="button"
      flex="none"
      px={hasCount ? 's' : 'm'}
      py="0"
      variant={`button.${variant}`}
      onClick={onClick}
    >
      <Layout align="center" flex="none" spacing="s">
        {icon && <Icon icon={icon} size="icon.m" />}
        <Text
          pr={hasCount ? 's' : undefined}
          styles={onExpand ? styles.rules.caret : null}
          variant="button.text"
        >
          {text}
        </Text>
      </Layout>
      {count && (
        <Layout align="center" bl="bordered" pl="s">
          <Text variant="button.text">{count}</Text>
        </Layout>
      )}
    </Layout>
  );
}
