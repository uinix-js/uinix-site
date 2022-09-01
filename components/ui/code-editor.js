import MonacoEditor from '@monaco-editor/react';

import {Card} from './card.js';

export function CodeEditor({language, value, onChange}) {
  return (
    <Card flex="auto">
      <MonacoEditor
        height="100%"
        language={language}
        value={value}
        onChange={onChange}
      />
    </Card>
  );
}
