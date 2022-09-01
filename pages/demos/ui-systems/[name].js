import {createElement as h, useEffect, useState} from 'react';
import {load} from 'uinix-ui';

import {pages} from '../../../data/pages.js';
import {loadSystem as loadDefaultSystem} from '../../../system/load-system.js';
import {Text} from '../../../components/ui/text.js';

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

    return () => loadDefaultSystem(); // Cleanup and reload default system
  }, [name]);

  if (demo) {
    const {App} = demo;
    return <App />;
  }

  return <Text>Loading demo...</Text>;
}
