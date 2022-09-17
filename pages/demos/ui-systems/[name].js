import {useRouter} from 'next/router';
import {createElement as h, useEffect, useState} from 'react';
import {merge} from 'uinix-fp';
import {load} from 'uinix-ui';

import {Element} from '../../../components/ui/element.js';
import {Layout} from '../../../components/ui/layout.js';
import {Select} from '../../../components/ui/select.js';
import {SystemKnowledge} from '../../../components/ui-systems/system-knowledge.js';
import {pages} from '../../../data/pages.js';
import {system as defaultSystem} from '../../../system/system.js';
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
      isFullPage: true,
      name,
    },
  };
};

export default function Page({name}) {
  const [demo, setDemo] = useState(null);

  const [view, setView] = useState('demo');

  const router = useRouter();

  useEffect(() => {
    let unload;
    const loadDemo = async () => {
      try {
        const {demo} = await import(
          `../../../components/ui-systems/systems/${name}/demo.js`
        );

        const {config, system} = demo;
        unload = load({h, config, system: merge(defaultSystem)(system)});

        setDemo(demo);
      } catch (error) {
        console.error(error);
      }
    };

    loadDemo();

    // Reset system global styles, reload default system, repush route
    return () => {
      unload?.();
      loadDefaultSystem();
      router.reload(window.location.pathname);
    };
  }, [name, router]);

  let contents;
  if (demo) {
    const {App, referenceDate, src, system, url} = demo;
    switch (view) {
      case 'source-code':
        contents = (
          <p>
            View the source code for this demo on{' '}
            <a
              href={`https://github.com/uinix-js/uinix-site/tree/main/components/ui-systems/systems/${name}`}
            >
              Github
            </a>
            .
          </p>
        );
        break;
      case 'system-knowledge':
        contents = <SystemKnowledge system={system} />;
        break;
      case 'snapshot':
        contents = (
          <Layout direction="column">
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

  const options = [
    {label: 'Demo', value: 'demo'},
    {label: 'System knowledge', value: 'system-knowledge'},
    {label: 'Source code', value: 'source-code'},
  ].concat(demo?.src ? [{label: 'Snapshot', value: 'snapshot'}] : []);

  return (
    <Layout direction="column" spacing="l">
      <Element as="label">
        View:{' '}
        <Select
          options={options}
          placeholder="Select a view"
          value={view}
          onChange={handleUpdateView}
        />
      </Element>
      {contents}
    </Layout>
  );
}
