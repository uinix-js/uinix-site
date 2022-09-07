import MonacoEditor from '@monaco-editor/react';

export function CodeEditor({language, value, onChange}) {
  return (
    <MonacoEditor
      height="100%"
      language={language}
      value={value}
      onChange={onChange}
    />
  );
}
