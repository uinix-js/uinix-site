import {useState} from 'react';
import {createSystem} from 'uinix-ui';

import {system as uinix} from '../../../../system/system.js';
import {BrandText} from '../../../ui/brand-text.js';
import {Layout} from '../../../ui/layout.js';
import {Text} from '../../../ui/text.js';
import {SystemKnowledge} from '../../system-knowledge.js';
import {system as apple} from '../apple/system/system.js';
import {system as discord} from '../discord/system/system.js';
import {system as github} from '../github/system/system.js';
import {system as google} from '../google/system/system.js';
import {system as spotify} from '../spotify/system/system.js';

const systems = {
  apple,
  discord,
  github,
  google,
  spotify,
  uinix,
};

export function App() {
  const [error, setError] = useState(null);
  const [system, setSystem] = useState(null);

  const handleSelectSystem = (event) => {
    const selectedSystem = systems[event.target.value];
    setError(null);
    setSystem(selectedSystem);
  };

  const handleUploadSystem = async (event) => {
    setError(null);
    setSystem(null);
    try {
      const text = await event.target.files[0].text();
      setSystem(createSystem(JSON.parse(text)));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Layout direction="column" p="m" spacing="l">
      <p>
        This entire site is built with the{' '}
        <BrandText enableLink text="uinix-ui" /> UI system. A UI system that
        builds a system to preview other UI systems. How fun! 🤗
      </p>
      <p>
        <BrandText enableLink text="uinix-ui" /> enables rapid UI development,
        and also provides simple ways to define/manage/access your system
        knowledge. Upload a valid <code>system.json</code> file or select a UI
        system to visualize its system knowledge.
      </p>
      <Layout align="center" spacing="m">
        <select value={system} onChange={handleSelectSystem}>
          <option value="">Select a system</option>
          {Object.keys(systems).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <div>or</div>
        <input type="file" onChange={handleUploadSystem} />
      </Layout>
      {system && <SystemKnowledge system={system} />}
      <p>
        {error && (
          <Text color="text.error">
            Unable to parse system JSON. Please ensure that a valid system is
            provided. Refer to the <BrandText enableLink text="uinix-ui" />{' '}
            documentation for details.
          </Text>
        )}
      </p>
    </Layout>
  );
}
