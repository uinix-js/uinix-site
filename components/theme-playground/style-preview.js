import {useEffect, useState} from 'react';
import {createThemeRenderer} from 'uinix-theme';

import {Card} from '../ui/card.js';
import {Layout} from '../ui/layout.js';

export function StylePreview({example}) {
  const {label, notes, style, options} = example;

  const [className, setClassName] = useState();

  useEffect(() => {
    const renderer = createThemeRenderer(options);
    renderer.render();
    setClassName(renderer.renderStyle(style));
  }, [options, style]);

  const handleCopyClassName = async () => {
    await navigator.clipboard.writeText(className);
  };

  return (
    <Card>
      <Layout direction="column" spacing="m">
        <div>
          You are viewing the <code>{label}</code> style.
        </div>
        <Card bg="background.wash">
          <div className={className}>
            The quick brown fox jumps over the lazy dog.
            <button type="button" onClick={handleCopyClassName}>
              Copy CSS Class
            </button>
          </div>
        </Card>
        <details open>
          <summary>Notes</summary>
          <ul>
            {className && (
              <li>
                View the <code>{className}</code> CSS class in the DOM to
                inspect resolved themed styles.
              </li>
            )}
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </details>
      </Layout>
    </Card>
  );
}
