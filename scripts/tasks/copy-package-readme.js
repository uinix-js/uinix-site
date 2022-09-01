import fs from 'node:fs';

import {getPackages} from './get-packages.js';

export const copyPackageReadme = () => {
  const packages = getPackages();
  for (const pkg of packages) {
    fs.copyFileSync(
      `node_modules/${pkg}/readme.md`,
      `pages/packages/${pkg}/readme.md`,
    );
  }
};
