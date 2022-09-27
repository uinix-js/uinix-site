import {useEffect, useRef, useState} from 'react';
import {merge} from 'uinix-fp';
import {createThemeRenderer} from 'uinix-theme';

import {BrandText} from '../ui/brand-text.js';

let resolvedStyle;

export function Preview({example}) {
  const rendererRef = useRef();

  const [className, setClassName] = useState();

  const {config = {}, style = {}, theme = {}, themeSpec = {}} = example;

  useEffect(() => {
    const options = {
      ...config,
      namespace: 'playground',
      theme,
      themeSpec,
    };

    resolvedStyle = merge(style)({});

    rendererRef.current = createThemeRenderer(options);
    rendererRef.current.load();

    rendererRef.current.renderGlobalStyles({});
    setClassName(rendererRef.current.renderStyle(resolvedStyle));
  }, [config, theme, themeSpec, style]);

  return (
    <div className={className}>
      <p>
        <strong>Welcome to the Theme Playground!</strong>
      </p>
      <p id="playground">
        In this playground, you can explore and learn about{' '}
        <BrandText enableLink text="uinix-theme" /> interactively.
      </p>
      <p data-attribute="preview">
        This panel previews the resolved CSS styles applied by examples on the
        right. Edit the examples or preview the styles in the DOM inspector to
        explore further.
      </p>
      {className && (
        <pre>
          .{className} {JSON.stringify(resolvedStyle, null, 2)}
        </pre>
      )}
    </div>
  );
}
