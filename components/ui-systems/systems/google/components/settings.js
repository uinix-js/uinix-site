import {noop} from 'uinix-fp';
import {Element, Icon} from 'uinix-ui';

import {system} from '../system/system.js';

export function Settings() {
  return (
    <Element borderRadius="round" p="x2" styles={system.styles.hover}>
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
