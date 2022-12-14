import {Icon, Layout, Text} from 'uinix-ui';

import {system} from '../system/system.js';

export function File({file}) {
  const {type, name, commitMessage, at} = file;
  const href = `https://github.com/uinix-js/uinix-ui/tree/main/${name}`;
  const iconColor = type === 'directory' ? 'icon.directory' : 'icon.default';

  return (
    <Layout
      align="center"
      bb="bordered"
      px="m"
      py="s"
      spacing="m"
      styles={system.styles.hover}
    >
      <Icon color={iconColor} icon={type} size="icon.m" />
      <Text
        truncate
        as="a"
        flex="none"
        href={href}
        color="text.primary"
        styleVariant="linkText"
        w="20%"
      >
        {name}
      </Text>
      <Text truncate as="a" flex="auto" href={href} styleVariant="link">
        {commitMessage}
      </Text>
      <Text
        truncate
        color="text.secondary"
        flex="none"
        textAlign="right"
        w="20%"
      >
        {at}
      </Text>
    </Layout>
  );
}
