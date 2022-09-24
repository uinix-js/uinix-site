import {Layout, Icon, Text} from 'uinix-ui';

export function NavItem({isSelected = true, item, onSelect}) {
  const {icon, label} = item;

  return (
    <li>
      <Layout
        as="a"
        align="center"
        bg={isSelected ? 'background.gray2' : undefined}
        borderRadius="m"
        href="#top"
        mx="-s"
        px="m"
        py="s"
        spacing="m"
        styleProps={{isSelected}}
        onClick={() => onSelect(item)}
      >
        <Icon icon={icon} size="icon.l" />
        <Text variant="text.nav">{label}</Text>
      </Layout>
    </li>
  );
}
