import fs from 'node:fs';

export const getPackages = () =>
  fs
    .readdirSync('pages/packages', {withFileTypes: true})
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
