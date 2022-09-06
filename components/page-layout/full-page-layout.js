import {Element} from '../ui/element.js';
import {NavLinks} from './nav-links.js';

export function FullPageLayout({children}) {
  return (
    <Element bg="inherit" px="l">
      <NavLinks />
      {children}
    </Element>
  );
}
