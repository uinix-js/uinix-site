import {pipe} from 'uinix-fp';

import {copyPackageReadme} from './tasks/copy-package-readme.js';

export const run = pipe([copyPackageReadme]);

run();
