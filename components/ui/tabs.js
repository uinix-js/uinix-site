import {Element} from './element.js';
import {Layout} from './layout.js';

export function Tabs({selectedTab, tabs, onSelectTab}) {
  return (
    <Layout bb="border" spacing="l">
      {tabs.map(({label, value}) => (
        <Element
          key={value}
          color="text.link"
          styles={selectedTab === value ? componentStyles.selectedTab : null}
          onClick={() => onSelectTab(value)}
        >
          {label}
        </Element>
      ))}
    </Layout>
  );
}

const componentStyles = {
  selectedTab: {
    borderBottom: 'border',
    borderColor: 'brand.primary',
    borderWidth: 'l',
  },
};
