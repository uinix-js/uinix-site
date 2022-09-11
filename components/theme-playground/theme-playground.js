import {useEffect, useState} from 'react';

import {BrandText} from '../ui/brand-text.js';
import {Card} from '../ui/card.js';
import {Layout} from '../ui/layout.js';
import {Select} from '../ui/select.js';
import {Tabs} from '../ui/tabs.js';
import {Editor} from './editor.js';
import {examples} from './examples.js';
import {Preview} from './preview.js';

export function ThemePlayground() {
  const [selectedTab, setSelectedTab] = useState('examples');

  const [exampleKey, setExampleKey] = useState('simple-themed');

  const [example, setExample] = useState({});

  useEffect(() => {
    setExample(examples[exampleKey]);
  }, [exampleKey]);

  const handleEdit = (updatedValue) => {
    setExample((previousExample) => ({
      ...previousExample,
      ...updatedValue,
    }));
  };

  const {notes = []} = example;

  let contents;
  switch (selectedTab) {
    case 'examples':
      contents = (
        <Layout align="flex-start" direction="column" h="100%" spacing="m">
          <div>
            <h2>Welcome to the Theme Playground!</h2>
            <p>
              In this playground, you can explore{' '}
              <BrandText href="/packages/uinix-theme" text="uinix-theme" />{' '}
              features interactively.
            </p>
            <p>
              Browse the <strong>Examples</strong> to begin. The example styles
              are previewed on the right panel and rendered CSS styles can be
              inspected in the DOM. Use the <strong>Editor</strong> to configure
              and further explore the example.
            </p>
          </div>
          <label>
            Browse examples:{' '}
            <Select
              placeholder="Select an example"
              options={exampleOptions}
              value={exampleKey}
              onChange={setExampleKey}
            />
          </label>
          <details open>
            <ul>
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </details>
        </Layout>
      );
      break;
    case 'editor':
      contents = <Editor example={example} onEdit={handleEdit} />;
      break;
    default:
      break;
  }

  return (
    <Layout direction="column" flex="auto" h="calc(100vh - 240px)">
      <Tabs
        selectedTab={selectedTab}
        tabs={tabs}
        onSelectTab={setSelectedTab}
      />
      <Layout flex="auto" minH={0} py="m" spacing="m">
        <Card flex="1">{contents}</Card>
        <Card flex="1">
          <Preview example={example} />
        </Card>
      </Layout>
    </Layout>
  );
}

const tabs = [
  {label: 'Examples', value: 'examples'},
  {label: 'Editor', value: 'editor'},
];

const exampleOptions = Object.entries(examples).map(([value, {title}], i) => ({
  label: `${i + 1}. ${title}`,
  value,
}));
