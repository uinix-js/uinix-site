import {useEffect, useState} from 'react';

import {Card} from '../ui/card.js';
import {Layout} from '../ui/layout.js';
import {Select} from '../ui/select.js';
import {Editor} from './editor.js';
import {examples} from './examples.js';
import {Preview} from './preview.js';

export function ThemePlayground() {
  const [exampleIndex, setExampleIndex] = useState(0);

  const [isEditing, setIsEditing] = useState(false);

  const [example, setExample] = useState({});

  useEffect(() => {
    setExample(examples[exampleIndex]);
  }, [exampleIndex]);

  const handleSelectExample = (updatedExampleIndex) => {
    setExampleIndex(updatedExampleIndex);
    setIsEditing(false);
  };

  const handleEditExample = (updatedValue) => {
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
          <Layout align="flex-start" direction="column" h="100%" spacing="l">
            <Select
              placeholder="Select an example"
              options={exampleOptions}
              value={exampleIndex}
              onChange={handleSelectExample}
            />
            <button type="button" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Example notes' : 'Edit example'}
            </button>
            {isEditing ? (
              <Editor example={example} onEdit={handleEditExample} />
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

const exampleOptions = examples.map(({title}, i) => ({
  label: `${i + 1}. ${title}`,
  value: i,
}));
