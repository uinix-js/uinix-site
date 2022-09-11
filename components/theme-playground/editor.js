import {CodeEditor} from '../ui/code-editor.js';

export function Editor({example, onEdit}) {
  const {config, style, theme, themeSpec} = example;

  const json = JSON.stringify({style, theme, themeSpec, config}, null, 2);

  const handleChange = (updatedValue) => {
    try {
      onEdit(JSON.parse(updatedValue));
    } catch {} // Swallow
  };

  return <CodeEditor language="json" value={json} onChange={handleChange} />;
}
