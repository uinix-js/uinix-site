import {App} from './app.js';
import snapshot from './assets/images/snapshot.png';
import {config} from './system/config.js';
import {system} from './system/system.js';

export const demo = {
  App,
  config,
  referenceDate: '2021-04-25',
  src: snapshot.src,
  system,
  url: 'https://www.google.com/search?q=lorem+ipsum',
};
