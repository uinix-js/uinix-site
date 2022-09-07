import {CodeEditor} from '../ui/code-editor.js';

export function Editor({options, style}) {
  const json = JSON.stringify({options, style}, null, 2);

  return <CodeEditor language="json" value={json} />;
}
