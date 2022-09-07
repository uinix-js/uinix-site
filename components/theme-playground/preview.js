import {useEffect, useRef, useState} from 'react';
import {createThemeRenderer} from 'uinix-theme';

export function Preview({options, style}) {
  const rendererRef = useRef();

  const [className, setClassName] = useState();

  useEffect(() => {
    rendererRef.current = createThemeRenderer(options);
    rendererRef.current.render();

    setClassName(rendererRef.current.renderStyle(style));
  }, [options, style]);

  return (
    <div className={className}>
      <h1>Ozymandias</h1>
      <p>
        I met a Traveller from an antique land, Who said, “Two vast and
        trunkless legs of stone Stand in the desart. Near them, on the sand,
        Half sunk, a shattered visage lies, whose frown,
      </p>
      <p>
        And wrinkled lip, and sneer of cold command, Tell that its sculptor well
        those passions read, Which yet survive, stamped on these lifeless
        things, The hand that mocked them, and the heart that fed:
      </p>
      <p>
        And on the pedestal these words appear: “My name is{' '}
        <em>Ozymandias, King of Kings</em>.” Look on my works ye Mighty, and
        despair!
      </p>
      <p>
        No thing beside remains. Round the decay Of that Colossal Wreck,
        boundless and bare, The lone and level sands stretch far away.
      </p>
      <cite>Percy Shelley</cite>
    </div>
  );
}
