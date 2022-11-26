import {useState} from 'react';
import {noop} from 'uinix-fp';
import {Element, Icon, Layout, Text} from 'uinix-ui';

import {system} from '../system/system.js';
import {Container} from './container.js';

export function Tabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Element bb="bordered" color="text.gray2">
      <Container>
        <Layout align="center" justify="space-between">
          <Layout spacing="x6">
            {tabs.map((tab) => {
              const {icon} = tabsData[tab];
              return (
                <Layout
                  key={tab}
                  align="center"
                  py="x2"
                  spacing="x1"
                  styleProps={{isSelected: selectedTab === tab}}
                  styles={system.styles.selectedTab}
                  onClick={() => setSelectedTab(tab)}
                >
                  <Icon icon={icon} size="icon.s" />
                  <Text styleVariant="google">{tab}</Text>
                </Layout>
              );
            })}
          </Layout>
          <Layout spacing="x6" styles={system.styles.selectedTab}>
            <Text styleVariant="google" onClick={noop}>
              Settings
            </Text>
            <Text styleVariant="google" onClick={noop}>
              Tools
            </Text>
          </Layout>
        </Layout>
      </Container>
    </Element>
  );
}

const tabsData = {
  All: {
    icon: 'search',
  },
  Images: {
    icon: 'images',
  },
  News: {
    icon: 'news',
  },
  Books: {
    icon: 'books',
  },
  Videos: {
    icon: 'videos',
  },
  More: {
    icon: 'more',
  },
};

const tabs = ['All', 'Images', 'News', 'Books', 'Videos', 'More'];
