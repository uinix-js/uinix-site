import {useEffect, useRef, useState} from 'react';
import {createThemeRenderer} from 'uinix-theme';

import {BrandText} from '../ui/brand-text.js';

export function Preview({example}) {
  const rendererRef = useRef();

  const [className, setClassName] = useState();

  useEffect(() => {
    const {config = {}, style = {}, theme = {}, themeSpec = {}} = example;

    const options = {
      ...config,
      namespace: 'playground',
      theme,
      themeSpec,
    };

    rendererRef.current = createThemeRenderer(options);
    rendererRef.current.render();

    setClassName(rendererRef.current.renderStyle(style));
  }, [example]);

  return (
    <div className={className}>
      <p>
        <strong>Welcome to the Theme Playground!</strong>
      </p>
      <p>
        In this playground, you can explore{' '}
        <BrandText href="/packages/uinix-theme" text="uinix-theme" /> features
        interactively.
      </p>
      <p>
        This panel previews the rendered CSS styles (<code>{className}</code>)
        applied by examples on the right. You may edit the example to further
        explore features through code.{' '}
      </p>
      <p>
        <em>Have fun!</em>
      </p>
    </div>
  );
}
