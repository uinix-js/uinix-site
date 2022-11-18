import {useState} from 'react';
import {useStyles} from 'uinix-ui';

import {Element} from '../ui/element.js';
import {Icon} from '../ui/icon.js';
import {Layout} from '../ui/layout.js';
import {Tabs} from '../ui/tabs.js';
import {Text} from '../ui/text.js';

const tabs = [
  {label: 'Icons', value: 'icons'},
  {label: 'Theme', value: 'theme'},
  {label: 'Styles', value: 'styles'},
  {label: 'System', value: 'system'},
];

export function SystemKnowledge({system}) {
  const [selectedTab, setSelectedTab] = useState('icons');
  const {icons, styles, theme} = system;

  let contents;
  switch (selectedTab) {
    case 'icons': {
      contents = <Icons icons={icons} />;
      break;
    }

    case 'styles': {
      contents = <pre>{JSON.stringify(styles, null, 2)}</pre>;
      break;
    }

    case 'system': {
      contents = <pre>{JSON.stringify(system, null, 2)}</pre>;
      break;
    }

    case 'theme': {
      contents = <pre>{JSON.stringify(theme, null, 2)}</pre>;
      break;
    }

    default: {
      break;
    }
  }

  return (
    <Layout direction="column" spacing="l">
      <Tabs
        selectedTab={selectedTab}
        tabs={tabs}
        onSelectTab={setSelectedTab}
      />
      {contents}
    </Layout>
  );
}

function Token({children, label}) {
  return (
    <Layout align="center" direction="column" spacing="s">
      <div>{children}</div>
      <Text as="code" fontSize="12px">
        {label}
      </Text>
    </Layout>
  );
}

function Icons({icons}) {
  const styles = useStyles();

  return (
    <Element styles={styles.rules.grid} styleProps={{columns: 5}}>
      {Object.keys(icons).map((icon) => (
        <Token key={icon} label={icon}>
          <Icon icon={icon} size="24px" />
        </Token>
      ))}
    </Element>
  );
}
