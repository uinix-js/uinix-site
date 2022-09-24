import {noop} from 'uinix-fp';
import {Element, Icon, useStyles} from 'uinix-ui';

export function Settings() {
  const styles = useStyles();

  return (
    <Element borderRadius="round" p="x2" styles={styles.rules.hover}>
      <Icon
        color="icon.default"
        icon="settings"
        size="icon.l"
        title="Google apps"
        onClick={noop}
      />
    </Element>
  );
}
