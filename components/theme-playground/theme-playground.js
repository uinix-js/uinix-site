import {useState} from 'react';

import {BrandText} from '../ui/brand-text.js';
import {CodeEditor} from '../ui/code-editor.js';
import {Element} from '../ui/element.js';
import {Layout} from '../ui/layout.js';
import {Select} from '../ui/select.js';
import {Tabs} from '../ui/tabs.js';
import {examples} from './examples.js';
import {StylePreview} from './style-preview.js';

export function ThemePlayground() {
  const [example, setExample] = useState(examples[0]);
  const [exampleField, setExampleField] = useState(exampleFieldTabs[0].value);

  const handleChangeExample = (updateExampleValue) => {
    const updatedExample = examples.find(
      (example) => example.value === updateExampleValue,
    );
    setExample(updatedExample);
  };

  const handleChangeEditorValue = (updatedValue) => {
    try {
      const updatedExampleValue = JSON.parse(updatedValue);
      setExample((previousExample) => ({
        ...previousExample,
        [exampleField]: updatedExampleValue,
      }));
    } catch {}
  };

  const editorValue = JSON.stringify(example[exampleField], null, 2);

  return (
    <Layout direction="column">
      <h1>Theme Playground</h1>
      <p>
        This playground explores{' '}
        <BrandText href="/packages/uinix-theme" text="uinix-theme" /> theme
        APIs. Define your own theme specs to construct valid themes for
        rendering themed styles with modern CSS-in-JS support. Your theme your
        rules 🤘.{' '}
      </p>
      <Element my="m">
        <label>
          Select an example{' '}
          <Select
            value={example.value}
            options={examples}
            onChange={handleChangeExample}
          />{' '}
        </label>
        or edit theme and styles below.
      </Element>
      <Tabs
        selectedTab={exampleField}
        tabs={exampleFieldTabs}
        onSelectTab={setExampleField}
      />
      <Layout flex="auto" minH="400px" spacing="m">
        <Layout flex="0 0 50%">
          <CodeEditor
            language="json"
            value={editorValue}
            onChange={handleChangeEditorValue}
          />
        </Layout>
        <Layout flex="0 0 50%">
          <StylePreview example={example} />
        </Layout>
      </Layout>
    </Layout>
  );
}

const exampleFieldTabs = [
  {label: 'Style', value: 'style'},
  {label: 'Options', value: 'options'},
];
