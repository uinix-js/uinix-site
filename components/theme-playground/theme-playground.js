import {useState} from 'react';

import {Card} from '../ui/card.js';
import {Layout} from '../ui/layout.js';
import {Select} from '../ui/select.js';
import {Tabs} from '../ui/tabs.js';
import {Editor} from './editor.js';
import {examples} from './examples.js';
import {Preview} from './preview.js';
import {Readme} from './readme.js';

export function ThemePlayground() {
  const [selectedTab, setSelectedTab] = useState('examples');

  const [example, setExample] = useState('simple-themed');

  const {options, notes, style} = examples[example];

  const isEditing = selectedTab === 'editor';

  let contents;
  switch (selectedTab) {
    case 'readme':
      contents = <Readme />;
      break;
    case 'examples':
    case 'editor':
      contents = (
        <Layout align="flex-start" direction="column" h="100%" spacing="m">
          <Layout
            align="center"
            flex="none"
            justify="space-between"
            spacing="m"
            w="100%"
          >
            <label>
              Select an example:{' '}
              <Select
                placeholder="Select an example"
                options={exampleOptions}
                value={example}
                onChange={setExample}
              />
            </label>
            <button
              type="button"
              onClick={() => setSelectedTab(isEditing ? 'examples' : 'editor')}
            >
              {isEditing ? 'View' : 'Edit'}
            </button>
          </Layout>
          {isEditing ? (
            <Editor options={options} style={style} />
          ) : (
            <details open>
              <ul>
                {notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </details>
          )}
        </Layout>
      );
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
          <Preview options={options} style={style} />
        </Card>
      </Layout>
    </Layout>
  );
}

const tabs = [
  {label: 'Readme', value: 'readme'},
  {label: 'Examples', value: 'examples'},
  {label: 'Editor', value: 'editor'},
];

const exampleOptions = Object.entries(examples).map(([value, {title}], i) => ({
  label: `${i + 1}. ${title}`,
  value,
}));
