import {createElement as h, useEffect, useState} from 'react';
import {load} from 'uinix-ui';

import {NavLinks} from '../../../components/page-layout/nav-links.js';
import {Element} from '../../../components/ui/element.js';
import {Layout} from '../../../components/ui/layout.js';
import {Select} from '../../../components/ui/select.js';
import {SystemKnowledge} from '../../../components/ui-systems/system-knowledge.js';
import {pages} from '../../../data/pages.js';
import {loadSystem as loadDefaultSystem} from '../../../system/load-system.js';

export const getStaticPaths = () => {
  const paths = pages.demos.uiSystems.cards.map((card) => ({
    params: {
      name: card.href.split('/').pop(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({params}) => {
  const {name} = params;

  return {
    props: {
      disableLayout: true,
      name,
    },
  };
};

export default function Page({name}) {
  const [demo, setDemo] = useState(null);
  const [view, setView] = useState('demo');

  useEffect(() => {
    const loadDemo = async () => {
      try {
        const {demo} = await import(
          `../../../components/ui-systems/systems/${name}/demo.js`
        );

        const {config, system} = demo;
        load({h, config, system});

        setDemo(demo);
      } catch (error) {
        console.error(error);
      }
    };

    loadDemo();

    // Reset system global styles, reload default system
    return () => {
      for (const stylesheet of document.querySelectorAll(
        'style[data-fela-type="STATIC"]',
      ))
        stylesheet.remove();

      loadDefaultSystem();
    };
  }, [name]);

  let contents;
  if (demo) {
    const {App, referenceDate, src, system, url} = demo;
    switch (view) {
      case 'system-knowledge':
        contents = <SystemKnowledge system={system} />;
        break;
      case 'snapshot':
        contents = (
          <Layout direction="column" styles={componentStyles.padded}>
            <p>
              This demo <a href={url}>references</a> a snapshot taken on{' '}
              {referenceDate}.
            </p>
            <img src={src} />
          </Layout>
        );
        break;
      default:
        contents = <App />;
    }
  } else {
    contents = (
      <Layout align="center" h="100vh" justify="center" w="100vw">
        Loading contents…
      </Layout>
    );
  }

  const handleUpdateView = (updatedView) => {
    setView(updatedView);
    window.scrollTo(0, 0);
  };

  return (
    <Layout direction="column">
      <Layout
        align="flex-start"
        direction="column"
        styles={componentStyles.header}
      >
        <Element styles={componentStyles.padded}>
          <NavLinks />
        </Element>
        <Element as="label" styles={componentStyles.padded}>
          View:{' '}
          <Select
            options={[
              {label: 'Demo', value: 'demo'},
              {label: 'Snapshot', value: 'snapshot'},
              {label: 'System Knowledge', value: 'system-knowledge'},
            ]}
            placeholder="Select a view"
            value={view}
            onChange={handleUpdateView}
          />
        </Element>
      </Layout>
      {contents}
    </Layout>
  );
}

// This style must be system-agnostic
const componentStyles = {
  header: {
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    '& a': {
      color: 'sienna',
    },
  },
  padded: {
    padding: 16,
  },
};
