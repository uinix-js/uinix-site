import {useEffect, useState} from 'react';

import {Card} from '../ui/card.js';
import {Layout} from '../ui/layout.js';
import {Select} from '../ui/select.js';
import {Editor} from './editor.js';
import {examples} from './examples.js';
import {Preview} from './preview.js';

export function ThemePlayground() {
  const [exampleKey, setExampleKey] = useState('simple-themed');

  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <Layout direction="column" flex="auto" h="calc(100vh - 240px)">
      <Layout flex="auto" minH={0} py="m" spacing="m">
        <Card flex="1">
          <Preview example={example} />
        </Card>
        <Card flex="1">
          <Layout direction="column" h="100%" spacing="m">
            <Layout align="center" justify="space-between" spacing="m">
              <label>
                Browse examples:{' '}
                <Select
                  placeholder="Select an example"
                  options={exampleOptions}
                  value={exampleKey}
                  onChange={setExampleKey}
                />
              </label>
              <button type="button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Notes' : 'Edit'}
              </button>
            </Layout>
            {isEditing ? (
              <Editor example={example} onEdit={handleEdit} />
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
        </Card>
      </Layout>
    </Layout>
  );
}

const exampleOptions = Object.entries(examples).map(([value, {title}], i) => ({
  label: `${i + 1}. ${title}`,
  value,
}));
