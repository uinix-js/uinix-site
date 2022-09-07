import {BrandText} from '../ui/brand-text.js';

export function Readme() {
  return (
    <div>
      <h2>Welcome to the Theme Playground!</h2>
      <p>
        In this playground, you can explore{' '}
        <BrandText href="/packages/uinix-theme" text="uinix-theme" /> features
        interactively.
      </p>
      <p>
        Browse the <strong>Examples</strong> to begin, or use the{' '}
        <strong>Editor</strong> to edit examples.
      </p>
      <p>
        Themed styles are visualized on the right panel where the generated CSS
        classes can be inspected in the DOM.
      </p>
    </div>
  );
}
